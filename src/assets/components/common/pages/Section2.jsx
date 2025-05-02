import React from "react";
import "./Section2.css";

const sectionsData = [
  {
    title: "Make Your Home Stylish",
    products: [
      {
        img: "src/assets/wall clock.jpg",
        alt: "wall clock",
        name: "Wall Clock",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/keyholder.jpg",
        alt: "key holder",
        name: "Key Holder",
        offer: "Special Offer",
      },
      {
        img: "src/assets/plant saplings.jpg",
        alt: "plants saplings",
        name: "Plants & Saplings",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/bathroom racks.jpg",
        alt: "bathroom racks",
        name: "Bathroom Racks",
        offer: "Top Collection",
      },
    ],
  },
  {
    title: "Travel Essential Picks",
    products: [
      {
        img: "src/assets/trimmer.jpg",
        alt: "trimmer",
        name: "Trimmer",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/mens casual shirt.jpg",
        alt: "casual shirt",
        name: "Casual Shirt",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/mentshirt.jpg",
        alt: "tshirt",
        name: "Men's T-Shirt",
        offer: "Special Off",
      },
      {
        img: "src/assets/boxers.jpg",
        alt: "boxers",
        name: "Boxers",
        offer: "Best Picks",
      },
    ],
  },
  {
    title: "Home Decor & Furnishings",
    products: [
      {
        img: "src/assets/waterbottle.jpg",
        alt: "water bottle & flask",
        name: "Water Bottle & Flask",
        offer: "Special Offer",
      },
      {
        img: "src/assets/plants.jpg",
        alt: "plants saplings",
        name: "Plants & Saplings",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/kitchen container.jpg",
        alt: "kitchen container",
        name: "Kitchen Container",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/bathracks.jpg",
        alt: "bathroom racks",
        name: "Bathroom Racks",
        offer: "Top Collection",
      },
    ],
  },
];

function ProductSection() {
  return (
    <div className="section-wrapper">
      {sectionsData.map((section, sectionIndex) => (
        <div className="section-box" key={sectionIndex}>
          <h3>{section.title}</h3>
          <div className="grid-2x2">
            {section.products.map((product, productIndex) => (
              <div className="product-card" key={productIndex}>
                <img src={product.img} alt={product.alt} />
                <p className="product-name">{product.name}</p>
                <p className="product-offer">{product.offer}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSection;