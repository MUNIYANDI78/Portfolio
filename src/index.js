// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import  './app.jsx';
// import Navbar from './components/Navbar'
// import Home from "./components/Home";
// // import Experience from "./components/Experience";
// import Skill from "./components/Skill";
// import Contact from "./components/Contact"
// import reportWebVitals from './reportWebVitals';
// import Projects from "./components/Projects";
// // import nav from './Navbar';
// import Aos from "aos";
// import "aos/dist/aos"
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//   <React.StrictMode>
//     {/* <App /> */}
//     <Navbar/>
//     <div className='container'></div>
//     <Home/>
//     {/* <Experience/> */}
//     <Skill/> 
//     <Projects/>
//     <Contact/>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Experience from './components/Experience';
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import reportWebVitals from './reportWebVitals';
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <>
      <Navbar />
      <div className='container'>
        <Home />
        <Experience />
        <Skill />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

