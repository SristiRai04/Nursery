import React from "react";
import {
  Droplets,
  Sun,
  ArrowRight,
  LoaderCircle,
} from "lucide-react";

function FeaturedPlants({
  plants = [],
  loading = false,
  error = "",
  onSelectPlant,
}) {

  // Safety check
  const plantList = Array.isArray(plants) ? plants : [];

  // Show a larger backend-backed set by default so the collection feels full.
  const displayedPlants = plantList.slice(0, 8);

  return (
    <section
      className="featured-section"
      id="featured"
    >

      {/* Heading */}

      <div className="section-heading featured-heading">

        <p>FEATURED PLANTS</p>

        <h2>Beautiful plants for every space</h2>

        <span>
          Discover plants selected to bring freshness,
          beauty and life into your home.
        </span>

      </div>


      {/* Loading */}

      {loading && (
        <div
          style={{
            textAlign: "center",
            padding: "40px",
          }}
        >

          <LoaderCircle
            size={35}
            className="loading-icon"
          />

          <p style={{ marginTop: "15px" }}>
            Loading plants...
          </p>

        </div>
      )}


      {/* Error */}

      {!loading && error && (
        <div
          style={{
            textAlign: "center",
            padding: "30px",
          }}
        >

          <p>{error}</p>

        </div>
      )}


      {/* No plants */}

      {!loading &&
        !error &&
        displayedPlants.length === 0 && (

          <div
            style={{
              textAlign: "center",
              padding: "40px",
            }}
          >

            <p>
              No plants found in this category.
            </p>

          </div>

        )}


      {/* Plants */}

      {!loading &&
        displayedPlants.length > 0 && (

          <div className="plants-grid">

            {displayedPlants.map((plant) => (

              <div
                className="plant-card"
                key={plant._id}
              >

                {/* Image */}

                <div className="plant-image">

                  <img
                    src={plant.image}
                    alt={plant.name}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />

                  <span className="plant-category">
                    {plant.category}
                  </span>

                </div>


                {/* Content */}

                <div className="plant-content">

                  <h3>
                    {plant.name}
                  </h3>

                  <p className="plant-description">
                    {plant.description}
                  </p>


                  {/* Plant information */}

                  <div className="plant-info">

                    <span>
                      <Sun size={14} />
                      {plant.light}
                    </span>

                    <span>
                      <Droplets size={14} />
                      {plant.water}
                    </span>

                  </div>


                  {/* Bottom */}

                  <div className="plant-bottom">

                    <strong>
                      ₹{plant.price}
                    </strong>

                    <button
                      type="button"
                      onClick={() => onSelectPlant(plant)}
                    >

                      View Details

                      <ArrowRight size={15} />

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}


      {/* View all */}

      {!loading &&
        displayedPlants.length > 0 && (

          <div className="view-all-container">

            <button
              className="view-all-button"
              type="button"
              onClick={() => {
                document
                  .getElementById("featured")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >

              View All Plants

              <ArrowRight
                size={16}
                style={{
                  marginLeft: "6px",
                  verticalAlign: "middle",
                }}
              />

            </button>

          </div>

        )}

    </section>
  );
}

export default FeaturedPlants;