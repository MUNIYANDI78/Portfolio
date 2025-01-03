import React from 'react'
import pdf from './pdf/JONE SW RESUME.pdf';

import hero from '../components/p1.jpg';



const Home = () => {
  return (
    <>
    <div className='container home'>
    <div className='left'>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h1>
    
    <a href={pdf}download="JONE SW RESUME.pdf" className='btn btn-outline-warning'>Download Resume</a>


    </div>
    <div className='right'>
        <div className='img'>
       
        
        <img src={hero} alt="" />
        </div>
    </div>
    
    </div>
    
    </>
  )
}

export default Home