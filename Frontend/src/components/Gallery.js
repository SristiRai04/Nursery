import React from "react";
import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
    title: "Indoor Greenery",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    title: "Plant Collection",
  },
  {
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    title: "Succulents",
  },
  {
    image:
      "https://images.unsplash.com/photo-1444392061186-9fc38f84f726",
    title: "Garden Plants",
  },
  {
    image:
      "https://images.unsplash.com/photo-1463154545680-d59320fd685d",
    title: "Flowering Plants",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    title: "Pots & Planters",
  },
];

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-heading">
        <div>
          <p>FROM OUR NURSERY</p>
          <h2>A little more green</h2>
        </div>

        <span>
          Take a look at some of the greenery and spaces that inspire us.
        </span>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <div
            className={`gallery-item gallery-item-${index + 1}`}
            key={index}
          >
            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <span>{item.title}</span>
              <ArrowUpRight size={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;