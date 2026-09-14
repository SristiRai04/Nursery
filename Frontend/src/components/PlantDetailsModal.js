import React, { useEffect } from "react";
import { Check, Droplets, Leaf, Ruler, Sun, X } from "lucide-react";

function PlantDetailsModal({ plant, loading = false, onClose }) {
  useEffect(() => {
    if (!plant && !loading) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [loading, onClose, plant]);

  if (!plant && !loading) return null;

  return (
    <div className="plant-modal-overlay" onClick={onClose} role="presentation">
      <div
        className="plant-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={plant ? `${plant.name} details` : "Loading plant details"}
      >
        <button className="plant-modal-close" type="button" onClick={onClose} aria-label="Close details">
          <X size={20} />
        </button>

        {loading ? (
          <div className="plant-modal-content"><p>Loading plant details...</p></div>
        ) : (
          <>
            <img className="plant-modal-image" src={plant.image} alt={plant.name} />
            <div className="plant-modal-content">
              <span className="plant-category">{plant.category}</span>
              <h2>{plant.name}</h2>
              <p>{plant.description}</p>
              <div className="modal-info">
                <div><Sun size={16} /> {plant.light}</div>
                <div><Droplets size={16} /> Water: {plant.water}</div>
                <div><Leaf size={16} /> Care: {plant.difficulty}</div>
                <div><Ruler size={16} /> Pot: {plant.potSize || "Medium"}</div>
                <div><Check size={16} /> {plant.stock > 0 ? `${plant.stock} available` : "Currently unavailable"}</div>
              </div>
              {plant.features?.length > 0 && <h3>{plant.features.join("  •  ")}</h3>}
              <strong>₹{plant.price}</strong>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PlantDetailsModal;