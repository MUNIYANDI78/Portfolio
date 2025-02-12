import React from 'react'
import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const contact = () => {
  return (
    <>
        <div className="container contact my-3 " id="contact">
            <h1>CONTACT ME</h1>
            <div className="contact-icon"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            >
                
                <a  href="https://www.linkedin.com/in/mtcreation/" target="_blank"  className="items">
                    <CiLinkedin className='icons'/>
                </a>
                <a href="https://x.com/MUNIYANDIT29306?t=T3Tephpeq1c3ODJuuqfhow&s=08" target="_blank"  className="items">
                    <FaXTwitter className='icons'/>
                </a>
                <a  href="https://github.com/MUNIYANDI78" target="_blank" className="items">
                    <FaGithub className='icons'/>
                </a>
                <a href="mailto:mt93188@gmail.com" target="_blank"  className="items">
                    <IoIosMail className='icons'/>
                </a>
                <a  href="https://www.instagram.com/innocent_boy_3002?igsh=Z3d6OHR0aXQ0dnQy" target="_blank"   className="items">
                    <FaInstagramSquare className='icons'/>
                </a>
                <a href="https://www.facebook.com/share/1GggM5HbhE/" target="_blank"  className="items">
                    <CiFacebook className='icons'/>
                </a>
            </div>
        </div>
        
        
        </>
  )
}

export default contact