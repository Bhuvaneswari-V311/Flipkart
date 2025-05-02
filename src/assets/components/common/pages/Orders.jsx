// import React, { useRef } from "react";
// import "./Orders.css";

// function Orders() {

//   const scrollRefs = useRef([]);

//   const scroll = (index, direction) => {
//     const container = scrollRefs.current[index];
//     const itemWidth = container.offsetWidth / 6;
//     container.scrollBy({
//       left: direction === "left" ? -itemWidth * 6 : itemWidth * 6,
//       behavior: "smooth",
//     });
//   };

//   const sections =[
//     {
      
//       title: "Best of Electronics",
//       products: [
//         { img: "src/assets/smartwatch.jpg", alt: "Smartwatch", title: "Smartwatches are under", price: "From ₹1,049" },
//         { img: "src/assets/printers.jpg", alt: "Printers", title: "Top wireless printers", price: "Shop now" },
//         { img: "src/assets/monitors.jpg", alt: "Monitors", title: "Monitors", price: "From ₹9,999" },
//         { img: "src/assets/boat.jpg", alt: "Boat", title: "BOAT Smartwatches", price: "Grab now" },
//         { img: "src/assets/Asus.jpg", alt: "Asus", title: "ASUS Monitors", price: "From ₹14,999" },
//         { img: "src/assets/Print.jpg", alt: "Print", title: "Printers", price: "From ₹3,999" },
//         { img: "src/assets/shaver.jpg", alt: "Shaver", title: "Best of Shavers", price: "From ₹1,649" },
//         { img: "src/assets/sandisk ssd.jpg", alt: "SSD", title: "Sandisk SSD", price: "From ₹5,799" },
//       ],
      
//     },
  
//     {
//       title: "Beauty, Foods, Toys & more",
//       products: [
//         { img: "src/assets/cofee.jpg", alt: "Coffee", title: "Coffee Powder", price: "Upto 80% off" },
//         { img: "src/assets/stationery.jpg", alt: "Stationery", title: "Top selling stationery", price: "From ₹49" },
//         { img: "src/assets/gear cy.jpg", alt: "Gear cycle", title: "Gear Cycle", price: "Upto to 40% off" },
//         { img: "src/assets/elec cy.jpg", alt: "Electric cycle", title: "Electric Cycle", price: "Upto to 30% off" },
//         { img: "src/assets/action.jpg", alt: "Action toys", title: "Best of Action toys", price: "Upto to 70% off" },
//         { img: "src/assets/puzzles.jpg", alt: "Puzzles", title: "Puzzles & Cubes", price: "From ₹99" },
//         { img: "src/assets/gym.jpg", alt: "Gym essentials", title: "Gym essentials", price: "From ₹139" },
//         { img: "src/assets/dry fruits.jpg", alt: "Dry fruits", title: "Dry Fruits", price: "Upto to 70% off" },
//       ],
//     },
//     {
//       title: "Sports, Healthcare & more",
//       products: [
//         { img: "src/assets/food spread.jpg", alt: "Food Spread", title: "Food Spread", price: "Upto 50% off" },
//         { img: "src/assets/nongearcy.jpg", alt: "Nongeared cycle", title: "Non-Geared Cycle", price: "From ₹3999" },
//         { img: "src/assets/Treadmill.jpg", alt: "Treadmill", title: "Gear Cycle", price: "Upto to 40% off" },
//         { img: "src/assets/softtoys.jpg", alt: "SoftToys", title: "Soft Toys", price: "Upto to 30% off" },
//         { img: "src/assets/teapowder.jpg", alt: "Tea powder", title: "Tea Powder", price: "Upto to 70% off" },
//         { img: "src/assets/yogamat.jpg", alt: "Yogamat", title: "Yogamat", price: "From ₹159" },
//         { img: "src/assets/sportshoes.jpg", alt: "Sports Shoes", title: "Sports Shoes", price: "Under ₹999" },
//         { img: "src/assets/remotecar.jpg", alt: "Remote Car", title: "Remote Control car", price: "Upto to 30% off" },
//       ],
//     },
//   ];

//   return (
//     <div className="orders-container">
//       {sections.map((section, index) => (
//         <div key={index}>
//           <h2>{section.title}</h2>
//           <div className="product-scroll-container">
//             <button className="scroll-btn left" onClick={() => scroll(index, "left")}>&lt;</button>
//             <div
//               className="products"
//               ref={(el) => (scrollRefs.current[index] = el)}
//             >
//               {section.products.map((product, pIndex) => (
//                 <div className="product" key={pIndex}>
//                   <img src={product.img} alt={product.alt} />
//                   {product.title}
//                   <h3>{product.price}</h3>
                  
//                 </div>
               
//               ))}
//             </div>
//             <button className="scroll-btn right" onClick={() => scroll(index, "right")}>&gt;</button>
          
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Orders;


// import React, { useRef } from "react";
// import "./Orders.css";

// const electronicsProducts = [
//   { img: "src/assets/watchh.jpg", title: "Smartwatches", price: "From ₹1,049" },
//   { img: "src/assets/printer.jpg", title: "Wireless Printers", price: "Shop now" },
//   { img: "src/assets/monitor.jpg", title: "Monitors", price: "From ₹9,999" },
//   { img: "src/assets/boat.jpg", title: "BOAT Airdopes", price: "From ₹999" },
//   { img: "src/assets/bennomonitor.jpg", title: "ASUS Monitors", price: "From ₹14,999" },
//   { img: "src/assets/projectot.jpg", title: "Projector", price: "From ₹9,999" },
//   { img: "src/assets/shaver.jpg", title: "Shavers", price: "From ₹1,649" },
//   { img: "src/assets/sandisk.jpg", title: "Sandisk SSD", price: "From ₹5,799" },
// ];

// const beautyProducts = [
//   { img: "src/assets/coffee.jpg", title: "Coffee Powder", price: "Up to 80% off" },
//   { img: "src/assets/stationary.jpg", title: "Stationery", price: "From ₹49" },
//   { img: "src/assets/cycle.jpg", title: "Gear Cycle", price: "Up to 40% off" },
//   { img: "src/assets/electriccycle.jpg", title: "Electric Cycle", price: "Up to 30% off" },
//   { img: "src/assets/toys.jpg", title: "Action Toys", price: "Up to 70% off" },
//   { img: "src/assets/puzzles.jpg", title: "Puzzles & Cubes", price: "From ₹99" },
//   { img: "src/assets/gym.jpg", title: "Gym Essentials", price: "From ₹139" },
//   { img: "src/assets/fruits.jpg", title: "Dry Fruits", price: "Up to 70% off" },
// ];

// const sportsProducts = [
//   { img: "src/assets/oats.jpg", title: "Protein Oats", price: "From ₹268" },
//   { img: "src/assets/nongear.jpg", title: "Non-Geared Cycle", price: "From ₹3,999" },
//   { img: "src/assets/excercise.jpg", title: "FITKIT", price: "Up to 60% off" },
//   { img: "src/assets/toys.jpg", title: "Soft Toys", price: "Up to 30% off" },
//   { img: "src/assets/tea.jpg", title: "Tea Powder", price: "Up to 70% off" },
//   { img: "src/assets/mat.jpg", title: "Yoga Mat", price: "From ₹159" },
//   { img: "src/assets/shoes.jpg", title: "Sports Shoes", price: "Under ₹999" },
//   { img: "src/assets/remotecar.jpg", title: "Remote Car", price: "Up to 30% off" }
// ];

// const ProductSection = ({ title, products, scrollRef, scroll }) => (
//   <>
//     <h2 className="section-title">{title}</h2>
//     <div className="product-section-row">
    
//       <div className="scroll-area">
//         <button className="scroll-btn left" onClick={() => scroll(scrollRef, "left")}>&lt;</button>
        
//         <div className="products" ref={scrollRef}>
//           {products.map((item, index) => (
//             <div className="product" key={index}>
//               <img src={item.img} alt={item.title} />
//               <p>{item.title}</p>
//               <h3>{item.price}</h3>
//             </div>
//           ))}
//         </div>
        
//         <button className="scroll-btn right" onClick={() => scroll(scrollRef, "right")}>&gt;</button>
//       </div>

      
//     </div>
//   </>
// );

// function Orders() {
//   const scrollRef1 = useRef(null);
//   const scrollRef2 = useRef(null);
//   const scrollRef3 = useRef(null);

//   const scroll = (ref, direction) => {
//     const itemWidth = ref.current.offsetWidth / 6;
//     ref.current.scrollBy({
//       left: direction === "left" ? -itemWidth * 6 : itemWidth * 6,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="orders-container">
//       <ProductSection
//         title="Best of Electronics"
//         products={electronicsProducts}
//         scrollRef={scrollRef1}
//         scroll={scroll}
        
//       />
//       <ProductSection
//         title="Beauty, Foods, Toys & More"
//         products={beautyProducts}
//         scrollRef={scrollRef2}
//         scroll={scroll}
//       />
//       <ProductSection
//         title="Sports, Healthcare & More"
//         products={sportsProducts}
//         scrollRef={scrollRef3}
//         scroll={scroll}
//       />
//     </div>
//   );
// }

// export default Orders;





import React, { useRef } from "react";
import "./Orders.css";

function Orders() {
  const scrollRefs = useRef([]);

  const scroll = (index, direction) => {
    const container = scrollRefs.current[index];
    const itemWidth = container.offsetWidth / 6;
    container.scrollBy({
      left: direction === "left" ? -itemWidth * 6 : itemWidth * 6,
      behavior: "smooth",
    });
  };

  const sections = [
    {
      title: "Best of Electronics",
      products: [
        { img: "src/assets/smartwatch.jpg", alt: "Smartwatch", title: "Smartwatches are under", price: "From ₹1,049" },
        { img: "src/assets/printers.jpg", alt: "Printers", title: "Top wireless printers", price: "Shop now" },
        { img: "src/assets/monitors.jpg", alt: "Monitors", title: "Monitors", price: "From ₹9,999" },
        { img: "src/assets/boat.jpg", alt: "Boat", title: "BOAT Smartwatches", price: "Grab now" },
        { img: "src/assets/Asus.jpg", alt: "Asus", title: "ASUS Monitors", price: "From ₹14,999" },
        { img: "src/assets/Print.jpg", alt: "Print", title: "Printers", price: "From ₹3,999" },
        { img: "src/assets/shaver.jpg", alt: "Shaver", title: "Best of Shavers", price: "From ₹1,649" },
        { img: "src/assets/sandisk ssd.jpg", alt: "SSD", title: "Sandisk SSD", price: "From ₹5,799" },
      ],
    },
    {
      title: "Beauty, Foods, Toys & more",
      products: [
        { img: "src/assets/cofee.jpg", alt: "Coffee", title: "Coffee Powder", price: "Upto 80% off" },
        { img: "src/assets/stationery.jpg", alt: "Stationery", title: "Top selling stationery", price: "From ₹49" },
        { img: "src/assets/gear cy.jpg", alt: "Gear cycle", title: "Gear Cycle", price: "Upto to 40% off" },
        { img: "src/assets/elec cy.jpg", alt: "Electric cycle", title: "Electric Cycle", price: "Upto to 30% off" },
        { img: "src/assets/action.jpg", alt: "Action toys", title: "Best of Action toys", price: "Upto to 70% off" },
        { img: "src/assets/puzzles.jpg", alt: "Puzzles", title: "Puzzles & Cubes", price: "From ₹99" },
        { img: "src/assets/gym.jpg", alt: "Gym essentials", title: "Gym essentials", price: "From ₹139" },
        { img: "src/assets/dry fruits.jpg", alt: "Dry fruits", title: "Dry Fruits", price: "Upto to 70% off" },
      ],
    },
    {
      title: "Sports, Healthcare & more",
      products: [
        { img: "src/assets/food spread.jpg", alt: "Food Spread", title: "Food Spread", price: "Upto 50% off" },
        { img: "src/assets/nongearcy.jpg", alt: "Nongeared cycle", title: "Non-Geared Cycle", price: "From ₹3999" },
        { img: "src/assets/Treadmill.jpg", alt: "Treadmill", title: "Gear Cycle", price: "Upto to 40% off" },
        { img: "src/assets/softtoys.jpg", alt: "SoftToys", title: "Soft Toys", price: "Upto to 30% off" },
        { img: "src/assets/teapowder.jpg", alt: "Tea powder", title: "Tea Powder", price: "Upto to 70% off" },
        { img: "src/assets/yogamat.jpg", alt: "Yogamat", title: "Yogamat", price: "From ₹159" },
        { img: "src/assets/sportshoes.jpg", alt: "Sports Shoes", title: "Sports Shoes", price: "Under ₹999" },
        { img: "src/assets/remotecar.jpg", alt: "Remote Car", title: "Remote Control car", price: "Upto to 30% off" },
      ],
    },
  ];

  return (
    <div className="orders-container">
      {sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <div className="product-scroll-wrapper">
            <div className="product-scroll-container">
              <button className="scroll-btn left" onClick={() => scroll(index, "left")}>&lt;</button>
              <div
                className="products"
                ref={(el) => (scrollRefs.current[index] = el)}
              >
                {section.products.map((product, pIndex) => (
                  <div className="product" key={pIndex}>
                    <img src={product.img} alt={product.alt} />
                    {product.title}
                    <h3>{product.price}</h3>
                  </div>
                ))}
              </div>
              <button className="scroll-btn right" onClick={() => scroll(index, "right")}>&gt;</button>
            </div>

            
            {index === 0 && (
              <a
                href="https://www.flipkart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="booking-outside"
              >
                <img
                  src="https://rukminim1.flixcart.com/fk-p-flap/470/720/image/ce3cf81edb760559.jpg?q=20"
                  alt="Booking"
                />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
