import React, { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <button
        className="navbar-logo"
        onClick={() => scrollToSection("home")}
      >
        <Leaf size={25} />

        <span>
          GREENORA<span className="logo-dot">.</span>
        </span>
      </button>


      {/* NAVIGATION LINKS */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>

        <button onClick={() => scrollToSection("home")}>
          Home
        </button>

        <button onClick={() => scrollToSection("featured")}>
          Plants
        </button>

        <button onClick={() => scrollToSection("categories")}>
          Categories
        </button>

        <button onClick={() => scrollToSection("finder")}>
          Find Your Plant
        </button>

        <button onClick={() => scrollToSection("why")}>
          About
        </button>

        <button onClick={() => scrollToSection("contact")}>
          Contact
        </button>

      </div>


      {/* ONLY ONE ENQUIRE BUTTON */}
      <button
        className="enquire-button"
        onClick={() => scrollToSection("contact")}
      >
        Enquire
      </button>


      {/* MOBILE MENU */}
      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

    </nav>
  );
}

export default Navbar;