import React from "react";
import {
  Leaf,
  ArrowRight,
} from "lucide-react";

function Hero() {

  const goToFinder = () => {
    const finder = document.getElementById("finder");

    if (finder) {
      finder.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <div className="hero-label">
          <Leaf size={17} />
          <span>GROW SOMETHING BEAUTIFUL</span>
        </div>

        <h1>
          Bring nature
          <br />
          home.
        </h1>

        <p className="hero-description">
          Discover beautiful plants for every space,
          from easy-care indoor greens to vibrant
          flowering favorites.
        </p>

        <div className="hero-buttons">

          <button
            type="button"
            className="primary-button"
            onClick={goToFinder}
          >
            Find Your Plant
            <ArrowRight size={17} />
          </button>

          <button
            type="button"
            className="secondary-button"
            onClick={() => {
              document
                .getElementById("plants")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            Explore Plants
          </button>

        </div>

      </div>

      <div className="hero-image">

        <img
          src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
          alt="Green plants"
        />

      </div>

    </section>
  );
}

export default Hero;