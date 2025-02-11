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
            <a  href="https://www.google.com" target="_blank"   className="items">
                <FaInstagramSquare className='icons'/>
            </a>
            <a href="https://www.google.com" target="_blank"  className="items">
                <CiFacebook className='icons'/>
            </a>
            <a  href="https://www.google.com" target="_blank"  className="items">
                <CiLinkedin className='icons'/>
            </a>
            <a href="https://www.google.com" target="_blank"  className="items">
                <FaXTwitter className='icons'/>
            </a>
            <a  href="https://www.google.com" target="_blank" className="items">
                <FaGithub className='icons'/>
            </a>
            <a href="mailto:mt93188@gmail.com" target="_blank"  className="items">
                <IoIosMail className='icons'/>
            </a>
        </div>
    </div>
    
    
    </>
  )
}

export default contact