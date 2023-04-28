import React from 'react'
import './Footer.css'
import { FiTwitter, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi"

const Footer = () => {

  const d = new Date();
  let year = d.getFullYear();

  return (
    <>
      <section className='footer-section'>
      <p>find us on</p>
        <div className="icons-container">
        <FiTwitter/><FiFacebook/><FiInstagram/><FiYoutube/>
        </div>
        <p>©{year} Remine India | all rights reserved.</p>
      </section>
    </>
  )
}

export default Footer
