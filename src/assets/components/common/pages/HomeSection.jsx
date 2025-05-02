import React from "react";
import "./HomeSection.css";

const sectionsData = [
  {
    title: "Summer Beauty & Fashion",
    products: [
      {
        img: "src/assets/wrist watch.jpg",
        alt: "wrist watch",
        name: "Wrist Watch",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/sport shoes3.jpg",
        alt: "sports shoes",
        name: "Sports Shoes",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/tshirts2.jpg",
        alt: "tshirt",
        name: "Men's T-Shirt",
        offer: "Special Off",
      },
      {
        img: "src/assets/trackpants.jpg",
        alt: "track pants",
        name: "Track Pants",
        offer: "Min 30% Off",
      },
    ],
  },
  {
    title: "Season’s Top Picks",
    products: [
      {
        img: "src/assets/mens casual shoes.jpg",
        alt: "mens causual shoes",
        name: "Men's Causual Shoes",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/mens casual shirts 2.jpg",
        alt: "Causual shirts",
        name: "Casual Shoes",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/mens slippers.jpg",
        alt: "slippers",
        name: " Men's Slippers",
        offer: "Min 70% Off",
      },
      {
        img: "src/assets/women sarees.jpg",
        alt: "womens saree",
        name: "Women's Sarees",
        offer: "Min 70% Off",
      },
    ],
  },
];

function HomeSection() {
  return (
    <div className="section-wrapper">

      {sectionsData.map((section, sectionIndex) => (
        <div className="section-box" key={sectionIndex}>
          <h3>{section.title}</h3>
          <div className="grid-2x2">
            {section.products.map((product, productIndex) => (
              <div className="product-card" key={productIndex}>
                <img src={product.img} alt={product.alt} />
                <div className="product-name">{product.name}</div>
                <h3 className="product-offer">{product.offer}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}

     
      <div className="section-box big-banner">
        <img
          src="src/assets/images/summer2.jpg"
          alt="Summer Sale Banner"
          className="big-banner-img"
        />
      </div>
    </div>
  );
}

export default HomeSection;