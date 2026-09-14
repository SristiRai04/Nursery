import React from "react";
import { ArrowUpRight, Droplets, Sun } from "lucide-react";

function PlantCard({ plant, onSelectPlant }) {
  return (
    <div className="plant-card">
      <div className="plant-image">
        <img src={plant.image} alt={plant.name} />

        <span className="plant-category">
          {plant.category}
        </span>
      </div>

      <div className="plant-content">
        <h3>{plant.name}</h3>

        <p className="plant-description">
          {plant.description}
        </p>

        <div className="plant-info">
          <span>
            <Sun size={15} />
            {plant.light}
          </span>

          <span>
            <Droplets size={15} />
            {plant.water}
          </span>
        </div>

        <div className="plant-bottom">
          <strong>₹{plant.price}</strong>

          <button type="button" onClick={() => onSelectPlant(plant)}>
            View Details
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;