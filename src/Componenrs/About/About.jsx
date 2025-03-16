import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/about_profile.svg"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import instagram from "../../assets/instagram.svg"

function About() {
  return (
    <div id ='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt=""/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hi, I'm Subhadeep Garai, a frontend developer and electronics engineer with experience in web development. I specialize in React.js, JavaScript, and UI/UX design, creating interactive and responsive web applications. Additionally, I have a background in circuit design and Verilog. I'm currently pursuing B.Tech in ECE at MEGHNAD SAHA INSTITUTE OF TECHNOLOGY-Kolkata (Graduating in 2025) and seeking opportunities in frontend development.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"100%"}}/></div>
                <div className="about-skill"><p>React Js</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"30%"}}/></div>
                <div className="about-skill"><p>SQL</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>C++</p><hr style={{width:"90%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            {/* <h1>10+</h1> */}
            <a href="https://www.instagram.com/subhadeep.garai" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt=""/>
            <p>Instagram</p>
            </a>
        </div>
        <hr/>
        <div className="about-achievement">
            {/* <h1>90+</h1> */}
            <a href="https://www.linkedin.com/in/subhadeep-garai-770337225" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt=""/>
            <p>Linkedin</p>
            </a>
        </div>
        <hr/>
        <div className="about-achievement">
            {/* <h1>15+</h1> */}
            <a href="https://github.com/SubhadeepGarai" target="_blank" rel="noopener noreferrer">
            <img src={github} alt=""/>
            <p>GitHub</p>
            </a>
        </div>
      </div>
    </div>
  );
}

export default About;
