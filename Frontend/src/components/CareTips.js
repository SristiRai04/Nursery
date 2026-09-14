import React, { useState } from "react";
import {
  Droplets,
  Sun,
  Sprout,
  Leaf,
  Scissors,
  Bug,
  Flower2,
  ThermometerSun,
  Wind,
  Shovel,
  Apple,
  RefreshCw,
  Home,
  CloudRain,
  Search,
  Heart,
  TreePine,
  Hand,
  Clock,
  ShieldCheck,
  ArrowDown,
  ArrowUp,
} from "lucide-react";

const careTips = [
  {
    title: "Watering",
    description:
      "Water your plants when the top layer of soil feels dry. Avoid overwatering because constantly wet soil can damage the roots.",
    icon: Droplets,
  },
  {
    title: "Right Sunlight",
    description:
      "Place plants according to their sunlight requirements. Some plants prefer bright indirect light while others can handle direct sunlight.",
    icon: Sun,
  },
  {
    title: "Healthy Soil",
    description:
      "Use well-draining and nutrient-rich soil suitable for the type of plant you are growing.",
    icon: Sprout,
  },
  {
    title: "Leaf Care",
    description:
      "Keep leaves clean by gently wiping away dust. Clean leaves can absorb light more effectively and look healthier.",
    icon: Leaf,
  },
  {
    title: "Pruning",
    description:
      "Remove dead, damaged, or yellowing leaves regularly to help the plant focus its energy on healthy growth.",
    icon: Scissors,
  },
  {
    title: "Pest Control",
    description:
      "Check leaves and stems regularly for insects or unusual spots. Early detection makes pest problems easier to manage.",
    icon: Bug,
  },
  {
    title: "Flowering Care",
    description:
      "Flowering plants need suitable light, consistent watering, and adequate nutrients to support healthy blooms.",
    icon: Flower2,
  },
  {
    title: "Temperature",
    description:
      "Protect plants from extreme heat and sudden temperature changes. Keep sensitive plants away from hot appliances and cold drafts.",
    icon: ThermometerSun,
  },
  {
    title: "Air Circulation",
    description:
      "Good air circulation helps reduce excessive humidity around leaves and lowers the risk of fungal problems.",
    icon: Wind,
  },
  {
    title: "Repotting",
    description:
      "Repot plants when their roots become crowded or the plant outgrows its container. Choose a pot with proper drainage.",
    icon: Shovel,
  },
  {
    title: "Fertilizing",
    description:
      "Provide suitable nutrients during active growth. Always follow the recommended amount instead of using too much fertilizer.",
    icon: Apple,
  },
  {
    title: "Rotate Plants",
    description:
      "Rotate indoor plants occasionally so different sides receive enough light and the plant grows more evenly.",
    icon: RefreshCw,
  },
  {
    title: "Choose the Right Spot",
    description:
      "Before placing a plant, consider sunlight, temperature, humidity, and available space in the location.",
    icon: Home,
  },
  {
    title: "Rainwater Care",
    description:
      "During heavy rainfall, protect plants that are sensitive to excess moisture and make sure containers drain properly.",
    icon: CloudRain,
  },
  {
    title: "Check the Soil",
    description:
      "Feel the soil before watering instead of following a fixed schedule. Different plants and environments need different amounts of water.",
    icon: Search,
  },
  {
    title: "Handle Gently",
    description:
      "Handle stems, leaves, and roots carefully when moving or repotting plants to prevent unnecessary damage.",
    icon: Hand,
  },
  {
    title: "Give Plants Time",
    description:
      "Plants need time to adjust after being moved or repotted. Avoid making many changes at once.",
    icon: Clock,
  },
  {
    title: "Protect New Growth",
    description:
      "Young leaves and shoots are delicate. Protect them from strong winds, harsh sunlight, and physical damage.",
    icon: ShieldCheck,
  },
  {
    title: "Root Health",
    description:
      "Healthy roots are essential for strong plants. Avoid containers that hold excess water for long periods.",
    icon: TreePine,
  },
  {
    title: "Regular Observation",
    description:
      "Spend a few minutes observing your plants regularly. Changes in leaves, soil, or growth can reveal problems early.",
    icon: Heart,
  },
];

function CareTips() {
  const [showMore, setShowMore] = useState(false);

  const visibleTips = showMore
    ? careTips
    : careTips.slice(0, 4);

  return (
    <section className="care-section" id="care">

      {/* HEADING */}
      <div className="care-heading">

        <p>PLANT CARE</p>

        <h2>Helping your plants thrive</h2>

        <span>
          A little knowledge goes a long way. Explore simple
          plant-care tips for healthier and happier greenery.
        </span>

      </div>

      {/* CARE CARDS */}
      <div className="care-grid">

        {visibleTips.map((tip, index) => {

          const Icon = tip.icon;

          return (
            <div
              className="care-card"
              key={index}
            >

              <div className="care-icon">
                <Icon size={27} />
              </div>

              <h3>{tip.title}</h3>

              <p>{tip.description}</p>

            </div>
          );

        })}

      </div>

      {/* ONE READ MORE BUTTON */}
      <div className="care-more-container">

        <button
          type="button"
          className="care-more-button"
          onClick={() => setShowMore(!showMore)}
        >

          {showMore ? (
            <>
              Show Less
              <ArrowUp size={17} />
            </>
          ) : (
            <>
              Read More
              <ArrowDown size={17} />
            </>
          )}

        </button>

      </div>

    </section>
  );
}

export default CareTips;