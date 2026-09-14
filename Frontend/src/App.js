import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedPlants from "./components/FeaturedPlants";
import PlantFinder from "./components/PlantFinder";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import CareTips from "./components/CareTips";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PlantDetailsModal from "./components/PlantDetailsModal";

import "./App.css";

const API_BASE_URL = process.env.REACT_APP_API_URL || "https://nursery-4jtk.onrender.com";
const API_URL = `${API_BASE_URL}/api/plants`;

function App() {
  const [plants, setPlants] = useState([]);
  const [loadingPlants, setLoadingPlants] = useState(true);
  const [error, setError] = useState("");
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [loadingPlantDetails, setLoadingPlantDetails] = useState(false);

  const openPlantDetails = async (plant) => {
    setSelectedPlant(plant);

    if (!plant?._id) return;

    try {
      setLoadingPlantDetails(true);
      const response = await fetch(`${API_URL}/${plant._id}`);

      if (!response.ok) throw new Error("Failed to fetch plant details");

      const data = await response.json();
      setSelectedPlant(data.plant || plant);
    } catch (err) {
      console.error("Error loading plant details:", err);
    } finally {
      setLoadingPlantDetails(false);
    }
  };

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        setLoadingPlants(true);

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch plants");
        }

        const data = await response.json();

        console.log("Initial plants:", data);

        setPlants(
          Array.isArray(data.plants)
            ? data.plants
            : []
        );
      } catch (err) {
        console.error("Error loading plants:", err);

        setError(
          "Unable to load plants from backend."
        );

        setPlants([]);
      } finally {
        setLoadingPlants(false);
      }
    };

    fetchPlants();
  }, []);

  return (
    <div className="app">

      <Navbar />

      <main>

        <Hero />

        <Categories
          setPlants={setPlants}
        />

        <FeaturedPlants
          plants={plants}
          loading={loadingPlants}
          error={error}
          onSelectPlant={openPlantDetails}
        />

        <PlantFinder onSelectPlant={openPlantDetails} />

        <WhyChooseUs />

        {/* About section */}
        <About />

        <CareTips />

        <Gallery />

        <Testimonials />

        <Contact />

      </main>

      <Footer />

      <PlantDetailsModal
        plant={selectedPlant}
        loading={loadingPlantDetails}
        onClose={() => setSelectedPlant(null)}
      />

    </div>
  );
}

export default App;