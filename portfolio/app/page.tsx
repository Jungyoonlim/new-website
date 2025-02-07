"use client";

import { motion } from "framer-motion"; 

/**
 * 
 * 
 *       
 */


export default function Home() {
  return (
    <div className="container">
      <motion.div
      initial={{ opacity: 0, y: 20}}
      animate = {{ opacity: 1, y:0 }}
      transition={{ duration: 1}}
    >
      <header>
        <h1>Jungyoon Lim</h1>
        <p className="subtitle">Designer, Design Engineer</p>
      </header>

      <main>
        <div className="section">
          <div className="about-section-title">About</div>
          <p>Hi, my name is Jungyoon Lim, Joanne. I am a design engineer. </p>
          <div className="section-content">
            <p className="current-previous-title">Currently</p>
            <p>Design, Human-Computer Interface, and AI</p>
            <p className="current-previous-title">Previously</p>
            <ul className="previously-done-list">
                <li>Design Engineer @ <a href="https://highlightai.com/" target="_blank" rel="noopener noreferrer">Highlight</a></li>
                <li>Applied Math and Philosophy at Brown University</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="section-title">Projects</div>
          <div className="section-content">
            <ul className="projects-list">
              <li>
                <h3>Project 1</h3>
                <p>Description of project 1.</p>
              </li>
              <li>
                <h3>Project 2</h3>
                <p>Description of project 2.</p>
              </li>
              <li>
                <h3>Project 3</h3>
                <p>Description of project 3.</p>
              </li>
            </ul>
          </div>  
        </div>

        <div className="section">
          <div className="links-title">Links</div>
          <div className="section-content">
            <ul className="links-list">
              <li><a href="https://read.cv/jungyoonlim">CV</a></li>
              <li><a href="https://github.com/Jungyoonlim">GitHub</a></li>
              <li><a href="https://jungyoonlim-fineart.vercel.app/">Art</a></li>
            </ul>
          </div>
        </div>
        
        <div className="section">
          <div className="section-title">Contact</div>
          <div className="section-content">
            <p>You can reach me via <a href="https://twitter.com/jungyoonlim">Twitter</a> or <a href="https://www.linkedin.com/in/jungyoonlim/">LinkedIn</a>.</p>
          </div>
        </div>
      </main>
    </motion.div>
    </div>
  );
}



