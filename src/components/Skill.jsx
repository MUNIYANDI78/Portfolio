import React from 'react'
import Skills from "../data/skills.json"
const skill = () => {
  return (
    <>
    <div className='container skills' id="skills">
        <h1>skills</h1>
       
        <div className='items' > 
        {Skills.map((data)=>(
          <>
            <div className='item'key={data.id}
            data-aos="flip-left"
            data-aos-duration="1000">
                <img src={`/images/${data.imageSrc}`} alt="" />
                <h3>{data.title}</h3>
            </div>
     
        
        
        </>
      ))}
          </div>
    </div>
    
    
    </>
  );
};

export default skill