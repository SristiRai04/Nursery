import React, { useState } from "react";
import {
  Leaf,
  Flower2,
  Sun,
  Sprout,
  Carrot,
  Package,
  ArrowRight,
} from "lucide-react";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
const API_URL = `${API_BASE_URL}/api/plants`;

const categories = [
  {
    name: "Indoor Plants",
    backendCategory: "Indoor Plants",
    description: "Bring fresh greenery into your home.",
    icon: Leaf,
  },
  {
    name: "Outdoor Plants",
    backendCategory: "Outdoor Plants",
    description: "Beautiful plants for gardens and balconies.",
    icon: Sun,
  },
  {
    name: "Flowering Plants",
    backendCategory: "Flowering Plants",
    description: "Add color and beauty to your space.",
    icon: Flower2,
  },
  {
    name: "Succulents",
    backendCategory: "Succulents",
    description: "Low-maintenance plants for busy lifestyles.",
    icon: Sprout,
  },
  {
    name: "Herbs & Vegetables",
    backendCategory: "Herbs & Vegetables",
    description: "Grow fresh herbs and vegetables at home.",
    icon: Carrot,
  },
  {
    name: "Seeds",
    backendCategory: "Seeds",
    description: "Start growing something beautiful.",
    icon: Package,
  },
];

function Categories({ setPlants }) {
  const [loadingCategory, setLoadingCategory] = useState(null);
  const [error, setError] = useState("");

  const exploreCategory = async (category) => {
    console.log("Clicked category:", category);

    try {
      setLoadingCategory(category);
      setError("");

      const url = `${API_URL}?category=${encodeURIComponent(category)}`;

      console.log("Fetching:", url);

      const response = await fetch(url);

      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error(
          `Backend returned status ${response.status}`
        );
      }

      const data = await response.json();

      console.log("Backend response:", data);

      if (!Array.isArray(data.plants)) {
        throw new Error("Backend did not return a plants array");
      }

      if (data.plants.length === 0) {
        const fallbackResponse = await fetch(API_URL);

        if (!fallbackResponse.ok) {
          throw new Error("Fallback fetch failed");
        }

        const fallbackData = await fallbackResponse.json();

        if (Array.isArray(fallbackData.plants) && fallbackData.plants.length > 0) {
          setPlants(fallbackData.plants);
          setError("This category is empty right now, so we’re showing the full collection instead.");
        } else {
          setPlants([]);
          setError("No plants are available from the backend yet.");
        }
      } else {
        setPlants(data.plants);
        setError("");
      }

      /*
        Scroll to Featured Plants after
        the backend data is loaded.
      */

      setTimeout(() => {
        const featuredSection =
          document.getElementById("featured");

        if (featuredSection) {
          featuredSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

    } catch (error) {
      console.error("Explore error:", error);

      setPlants([]);

      setError(
        "Unable to load plants. Please make sure the backend and MongoDB are running."
      );
    } finally {
      setLoadingCategory(null);
    }
  };

  return (
    <section
      className="categories-section"
      id="categories"
    >
      {/* Section Heading */}

      <div className="section-heading">
        <p>EXPLORE OUR COLLECTION</p>

        <h2>Find the perfect plant</h2>

        <span>
          Explore our collection and find greenery that fits
          your space and lifestyle.
        </span>
      </div>

      {/* Error Message */}

      {error && (
        <div className="category-error">
          {error}
        </div>
      )}

      {/* Categories */}

      <div className="categories-grid">

        {categories.map((category) => {
          const Icon = category.icon;

          const isLoading =
            loadingCategory === category.backendCategory;

          return (
            <div
              className="category-card"
              key={category.name}
            >
              {/* Icon */}

              <div className="category-icon">
                <Icon size={26} />
              </div>

              {/* Name */}

              <h3>
                {category.name}
              </h3>

              {/* Description */}

              <p>
                {category.description}
              </p>

              {/* Explore Button */}

              <button
                type="button"
                onClick={() =>
                  exploreCategory(
                    category.backendCategory
                  )
                }
                disabled={
                  loadingCategory !== null
                }
              >
                {isLoading ? (
                  "Loading..."
                ) : (
                  <>
                    Explore
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Categories;