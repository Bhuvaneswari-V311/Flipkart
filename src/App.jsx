// import { useState } from 'react'

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'
// import Flip from './assets/components/common/Flip'
// import CategoryMenu from './assets/components/common/pages/CategoryMenu'
// import Slider from './assets/components/common/pages/Slider'
// import Orders from './assets/components/common/pages/Orders'
// import Section from './assets/components/common/pages/Section'
// import Section2 from './assets/components/common/pages/Section2'
// import HomeSection from './assets/components/common/pages/HomeSection'
// import Appliances from './assets/components/common/pages/Appliances'
// import LoginPage from './assets/components/common/pages/LoginPage';






// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     // <>
//     //   <div>
//     //     <a href="https://vite.dev" target="_blank">
//     //       <img src={viteLogo} className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://react.dev" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div>
//     //   <h1>Vite + React</h1>
//     //   <div className="card">
//     //     <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button>
//     //     <p>
//     //       Edit <code>src/App.jsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p>
//     // </>
//     <Router>
//       <Routes>
//         <Route path="/" element={
//           <>
//              <Flip/>
//     <CategoryMenu/>
//     <Slider/>
//     <Orders/>
//     <Section/>
//     <Section2/>
//     <HomeSection/>
//     <Appliances/>
//           </>

//         }/>

//       <Route path="/login" element={<LoginPage/>}/>
//       </Routes>
//     </Router>
   
  
//   )
// }

// export default App






// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Flip from './assets/components/common/Flip'
// import CategoryMenu from './assets/components/common/pages/CategoryMenu'
// import Slider from './assets/components/common/pages/Slider'
// import Orders from './assets/components/common/pages/Orders'
// import Section from './assets/components/common/pages/Section'
// import Section2 from './assets/components/common/pages/Section2'
// import HomeSection from './assets/components/common/pages/HomeSection'
// import Appliances from './assets/components/common/pages/Appliances'
// import LoginPage from './assets/components/common/pages/LoginPage';

// function App() {


//   return (

//     <Router>
//       <Routes>
//         <Route path="/" element={
//           <>
//              <Flip/>
//     <CategoryMenu/>
//     <Slider/>
//     <Orders/>
//     <Section/>
//     <Section2/>
//     <HomeSection/>
//     <Appliances/>
//           </>

//         }/>

//       <Route path="/login" element={<LoginPage/>}/>
//       </Routes>
//     </Router>
   
  
//   )
// }

// export default App





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page Components
import Flip from './assets/components/common/Flip';
import CategoryMenu from './assets/components/common/pages/CategoryMenu';
import Slider from './assets/components/common/pages/Slider';
import Orders from './assets/components/common/pages/Orders';
import Section from './assets/components/common/pages/Section';
import Section2 from './assets/components/common/pages/Section2';
import HomeSection from './assets/components/common/pages/HomeSection';
import Appliances from './assets/components/common/pages/Appliances';
import LoginPage from './assets/components/common/pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Home Page Route */}
        <Route path="/" element={
          <>
            <Flip />
            <CategoryMenu />
            <Slider />
            <Orders />
            <Section />
            <Section2 />
            <HomeSection />
            <Appliances />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;