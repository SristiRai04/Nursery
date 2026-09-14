import React from "react";
import {
  Heart,
  Lightbulb,
  Truck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Healthy Plants",
    description:
      "We focus on healthy, well-cared-for plants that are ready for their new home.",
  },
  {
    icon: Lightbulb,
    title: "Expert Guidance",
    description:
      "Get simple and practical advice to help your plants grow beautifully.",
  },
  {
    icon: Truck,
    title: "Local Delivery",
    description:
      "Convenient delivery options to help bring your favorite plants closer to home.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "Carefully selected plants and gardening essentials you can rely on.",
  },
];

function WhyChooseUs() {
  const handleLearnMore = () => {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error(
        'About section with id="about" was not found.'
      );
    }
  };

  return (
    <section className="why-section" id="why">

      {/* Left Content */}

      <div className="why-content">

        <p className="why-label">
          WHY GREENORA?
        </p>

        <h2>
          More than plants.
          <br />
          We're growing something better.
        </h2>

        <p className="why-description">
          Whether you're a first-time plant parent or an
          experienced gardener, Greenora makes it easier to
          bring nature into your everyday life.
        </p>

        <button
          type="button"
          className="why-button"
          onClick={handleLearnMore}
        >
          Learn More About Us
          <ArrowRight size={16} />
        </button>

      </div>


      {/* Benefits */}

      <div className="benefits-grid">

        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              className="benefit-card"
              key={benefit.title}
            >

              <div className="benefit-icon">
                <Icon size={25} />
              </div>

              <h3>
                {benefit.title}
              </h3>

              <p>
                {benefit.description}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default WhyChooseUs;