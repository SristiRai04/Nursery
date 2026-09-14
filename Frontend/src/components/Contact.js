import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Thank you, ${formData.name}! Your enquiry has been received.`
    );

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-info">
        <p className="contact-label">GET IN TOUCH</p>

        <h2>
          Let's grow
          <br />
          something together.
        </h2>

        <p className="contact-description">
          Have a question about a plant or need help choosing one?
          We'd love to hear from you.
        </p>

        <div className="contact-details">
          <div className="contact-detail">
            <div className="contact-icon">
              <MapPin size={20} />
            </div>

            <div>
              <strong>Visit Us</strong>
              <span>Greenora Nursery, Bangalore</span>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">
              <Phone size={20} />
            </div>

            <div>
              <strong>Call Us</strong>
              <span>+91 98765 43210</span>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">
              <Mail size={20} />
            </div>

            <div>
              <strong>Email</strong>
              <span>hello@greenora.in</span>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">
              <Clock size={20} />
            </div>

            <div>
              <strong>Opening Hours</strong>
              <span>Mon – Sun: 9:00 AM – 7:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us an enquiry</h3>

          <div className="form-row">
            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What can we help you with?"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Enquiry
            <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;