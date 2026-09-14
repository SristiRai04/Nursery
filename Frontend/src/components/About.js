import React from "react";
import {
  Leaf,
  Sprout,
  Heart,
} from "lucide-react";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        <p className="about-label">
          ABOUT GREENORA
        </p>

        <h2>
          More than plants.
          <br />
          We're growing something better.
        </h2>

        <p className="about-description">
          Whether you're a first-time plant parent or an experienced
          gardener, Greenora makes it easier to bring nature into your
          everyday life.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <div className="about-icon">
              <Leaf size={25} />
            </div>

            <h3>Beautiful Plants</h3>

            <p>
              Discover healthy plants selected to bring
              freshness and natural beauty into your space.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">
              <Sprout size={25} />
            </div>

            <h3>Simple Guidance</h3>

            <p>
              Learn practical plant-care techniques that
              make growing plants easier and more enjoyable.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">
              <Heart size={25} />
            </div>

            <h3>Grow With Confidence</h3>

            <p>
              Greenora helps beginners and experienced
              gardeners create greener everyday spaces.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;