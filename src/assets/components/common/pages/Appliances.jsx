import React, { useRef } from "react";
import "./Appliances.css";

const ProductSection = ({ title, products, scrollRef, scroll }) => (
  <>
    <h2>{title}</h2>
    <div className="product-scroll-container">
      <button className="scroll-btn left" onClick={() => scroll(scrollRef, "left")}>&lt;</button>
      <div className="products" ref={scrollRef}>
        {products.map((item, index) => (
          <div className="product" key={index}>
            <img src={item.img} alt={item.title} />
            <div>{item.title}</div>
            <h3>{item.price}</h3>
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={() => scroll(scrollRef, "right")}>&gt;</button>
    </div>
  </>
);

function Appliances() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollRef4 = useRef(null);
  const scrollRef5 = useRef(null);
  const scrollRef6 = useRef(null);


  const scroll = (ref, direction) => {
    const itemWidth = ref.current.offsetWidth / 6;
    ref.current.scrollBy({
      left: direction === "left" ? -itemWidth * 6 : itemWidth * 6,
      behavior: "smooth",
    });
  };

  const homeDecorProducts = [
    { img: "src/assets/images/matress.jpg", title: "Mattress", price: "From ₹2,900" },
    { img: "src/assets/images/sofa.jpg", title: "Sofa & Sectional", price: "From ₹7,990" },
    { img: "src/assets/images/chair.jpg", title: "Chairs", price: "From ₹1,890" },
    { img: "src/assets/images/beds.jpg", title: "Beds", price: "From ₹1,790" },
    { img: "src/assets/images/tv units.jpg", title: "Tv Units", price: "From ₹1,249" },
    { img: "src/assets/images/sofa beds.jpg", title: "Sofa Beds", price: "From ₹6,099" },
    { img: "src/assets/images/sofa sets.jpg", title: "Sofa Sets", price: "From ₹21,999" },
  ];

  const fashionDealsProducts = [
    { img: "src/assets/images/Handbags.jpg", title: "Hand Bags", price: " From ₹3,190 " },
    { img: "src/assets/images/women dresses.jpg", title: "Women's Fashion", price: "Under ₹299" },
    { img: "src/assets/images/pumaaddida.jpg", title: "Puma Adidas", price: "Under ₹1,209" },
    { img: "src/assets/images/women tops.jpg", title: "Women's Tops", price: "Under ₹299" },
    { img: "src/assets/images/baby fashion.jpg", title: "Baby fashions", price: "Under ₹799" },
    { img: "src/assets/images/Women's Flat Sandel.jpg", title: "Women's Flat Sandel", price: "Under ₹999" },
    { img: "src/assets/images/Women's Shirts.jpg", title: "Women's Shirts", price: "Under ₹799" },
  ];

  const booksToysProducts = [
    { img: "src/assets/images/Riding Glove.jpg", title: "Riding Gloves", price: "Up to 50% Off" },
    { img: "src/assets/images/Car Light Bulb.jpg", title: "Car Light Bulb", price: "From ₹299" },
    { img: "src/assets/images/Bike body Covers.jpg", title: "Bike body Covers", price: "From ₹199" },
    { img: "src/assets/images/Bike Helmets.jpg", title: "Bike Helmets", price: "From ₹499" },
    { img: "src/assets/images/Car Covers.jpg", title: "Car Covers", price: "From ₹299" },
    { img: "src/assets/images/Vehicle Cleaning Cloth.jpg", title: "Vehicle Cleaning Cloth", price: "From ₹31,099" },
    { img: "src/assets/images/Musical Toys.jpg", title: "Musical Toys", price: "From ₹299" },
  ];

  const tvsAppliancesProducts = [
    { img: "src/assets/images/Energy Efficient Refrigerato.jpg", title: "Energy Efficient Refrigerator", price: "From ₹12,999" },
    { img: "src/assets/images/Godrej Refrigerators.jpg", title: " Godrej Refrigerators", price: "From ₹10,499" },
    { img: "src/assets/images/Washing Machines.jpg", title: "Washing Machines", price: "From ₹30,099" },
    { img: "src/assets/images/Samsung Refrigerator.jpg", title: "Samsung Refrigerator", price: "From ₹81,999" },
    { img: "src/assets/images/Semi Automatic Load Washing Machine.jpg", title: "Semi Automatic Load Washing Machine", price: "From ₹23,999" },
    { img: "src/assets/images/Double Door Refrigerator.jpg", title: "Double Door Refrigerator", price: "From ₹23,999" },
    { img: "src/assets/images/Smart Tv.jpg", title: "Smart Tv", price: "From ₹31,099" },
  ];

  const pickYourStylesProducts = [
    { img: "src/assets/images/hand bags.jpg", title: "Handbags", price: "Up to 50% Off" },
    { img: "src/assets/images/Bags & Luggages2.jpg", title: "Bags & Luggages", price: "Up to 60% Off" },
    { img: "src/assets/images/Tshirts Jeans.jpg", title: "Tshirts Jeans", price: "Up to 70% Off" },
    { img: "src/assets/images/Track Pants.jpg", title: "Track Pants", price: "Up to 55% Off" },
    { img: "src/assets/images/Sneakers for Men's.jpg", title: "Sneakers for Men's", price: "Up to 60% Off" },
    { img: "src/assets/images/Casual Clutch.jpg", title: "Casual Clutch", price: "Up to 60% Off" },
    { img: "src/assets/images/Men's Footwear.jpg", title: " Men's Footwear", price: "Up to 60% Off" },
  ];

  const recentlyViewedProducts =  [
    { img: "src/assets/images/Coffee Powder.jpg", title: "Coffee Powder", price: "Up to 80% off" },
    { img: "src/assets/images/Stationery.jpg", title: "Stationery", price: "From ₹49" },
    { img: "src/assets/images/Gear Cycle.jpg", title: "Gear Cycle", price: "Up to 40% off" },
    { img: "src/assets/images/Electric Cycle.jpg", title: "Electric Cycle", price: "Up to 30% off" },
    { img: "src/assets/images/Action Toys.jpg", title: "Action Toys", price: "Up to 70% off" },
    { img: "src/assets/images/Puzzles & Cubes.jpg", title: "Puzzles & Cubes", price: "From ₹99" },
    { img: "src/assets/images/Gym Essentials.jpg", title: "Gym Essentials", price: "From ₹139" },
    { img: "src/assets/images/Dry Fruits.jpg", title: "Dry Fruits", price: "Up to 70% off" },
  ];
    

  return (
    <div className="orders-container">
      <ProductSection
        title="Furniture Deals"
        products={homeDecorProducts}
        scrollRef={scrollRef1}
        scroll={scroll}
      />
      <ProductSection
        title="Fashion Top Deals"
        products={fashionDealsProducts}
        scrollRef={scrollRef2}
        scroll={scroll}
      />
      <ProductSection
        title="Top Deals"
        products={booksToysProducts}
        scrollRef={scrollRef3}
        scroll={scroll}
      />
      <ProductSection
        title="Top Deals on TVs & Appliances"
        products={tvsAppliancesProducts}
        scrollRef={scrollRef4}
        scroll={scroll}
      />
      <ProductSection
        title="Pick Your Style"
        products={pickYourStylesProducts}
        scrollRef={scrollRef5}
        scroll={scroll}
      />

<ProductSection
  title="Recently Viewed"
  products={recentlyViewedProducts}
  scrollRef={useRef(null)}
  scroll={scroll}
/>
      
    </div>
  );
}

export default Appliances;