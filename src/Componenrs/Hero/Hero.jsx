import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Subhadeep Garai_CV.pdf"

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt=" "/>
      <h1><span>I'm Subhadeep Garai,</span> Electronics & Communication Engineer</h1>
      <p>I am a Frontend Developer from West Bengal, India.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
        <a href={resume} target="_blank" rel="noopener noreferrer">My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
