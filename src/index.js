import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import  './app.jsx';
import Navbar from './components/Navbar'
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import reportWebVitals from './reportWebVitals';
import Projects from "./components/Projects"
// import nav from './Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar/>
    <div className='container'></div>
    <Home/>
    {/* <Experience/> */}
    <Skill/> 
    <Projects/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
