import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya",
    location: "Bangalore",
    review:
      "The plant finder made it really easy to choose a plant for my room. The website is simple and beautiful.",
  },
  {
    name: "Rahul",
    location: "Bangalore",
    review:
      "I loved how easy it was to explore different plants and understand their care requirements.",
  },
  {
    name: "Meera",
    location: "Bangalore",
    review:
      "The care guides are really helpful for someone who is just starting to grow plants at home.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-heading">
        <p>COMMUNITY LOVE</p>

        <h2>Growing together</h2>

        <span>
          Sample customer feedback for the Greenora demo experience.
        </span>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.name}>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={17} fill="currentColor" />
              ))}
            </div>

            <p className="testimonial-review">
              “{testimonial.review}”
            </p>

            <div className="testimonial-user">
              <div className="user-avatar">
                {testimonial.name.charAt(0)}
              </div>

              <div>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;