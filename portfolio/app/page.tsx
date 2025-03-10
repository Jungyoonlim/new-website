"use client";

import { motion } from "framer-motion"; 
import { ThemeToggle } from '@/components/providers/theme-toggle'
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <motion.div
      initial={{ opacity: 0, y: 20}}
      animate = {{ opacity: 1, y: 0 }}
      transition={{ duration: 1}}
    >
      <header>
        <h1 style={{ color: `rgb(var(--primary))`}}>
        Jungyoon Lim
        </h1>
        <p className="subtitle">Design Engineer</p>
      </header>

      <main>
        <div className="section">
          <div className="about-section-title">About</div>
          <p>Hi, my name is Jungyoon Lim, Joanne. I am a design engineer. </p>
          <div className="section-content">
            <p className="current-previous-title">Currently</p>
            <p>Design and Human-Computer Interface</p>
            <p className="current-previous-title">Previously</p>
            <ul className="previously-done-list">
                <li>Design Engineer @ <a href="https://highlightai.com/" target="_blank" rel="noopener noreferrer">Highlight</a></li>
                <li>Applied Math and Philosophy at Brown University</li>
            </ul>
          </div>
        </div>
        
        <div className="section">
          
        </div>

        <div className="section">
          <div className="links-title">Links</div>
          <div className="section-content">
            <ul className="links-list">
              <li><a href="https://read.cv/jungyoonlim">CV</a></li>
              <li><a href="https://github.com/Jungyoonlim">GitHub</a></li>
              <li>
                <Link
                  href="/portfolio"
                >Portfolio</Link></li>
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
    <ThemeToggle />
    </div>
  );
}



