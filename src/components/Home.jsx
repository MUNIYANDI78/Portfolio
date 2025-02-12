import React, { useEffect, useRef } from 'react'
import pdf from './pdf/My resume new.pdf';

import hero from '../components/p1.jpg';
import Typed from "typed.js"


const Home = () => {
  const typedRef = useRef(null)
  useEffect(()=>{
    const options = {
      strings:["Welcome to my profile","My name is Muniyandi","I'm Full Stack Web Developer for Fresher"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
    const typed = new Typed(typedRef.current ,options)
    return()=>{
      typed.destroy()
    }
  },[])
  return (
    <>
    <div className='container home' id="home">

    <div className='left' data-aos="fade-up-right" data-aos-duration="1000">
        <h1 ref={typedRef}> </h1>
    
    <a href={pdf}download="My resume new.pdf" className='btn btn-outline-warning my-3'>Download Resume</a>


    </div>
    <div className='right'>
        <div className='img'
        data-aos="fade-up-left" data-aos-duration="1000">
       
        
        <img src={hero} alt="" />
        </div>
    </div>
    
    </div>
    
    </>
  )
}

export default Home