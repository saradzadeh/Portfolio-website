import './About.css';
import React, { Component } from 'react'
import {HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'



export default function About(){
    return (
        <Router>
        <section className='about-page'>
            <h1 className='about-title'>About Me</h1>
            <div className=''>
                <p className='about-p'>Hey, I am Sara
                I am a web developer who loves learning. Design and creative problem solving always was a great passion of mine in architectural studies. I was passionate about the design and software skills to improve the experience of the users. I developed a strong set of pixel-perfect skills through my architecture studies and practice, giving me familiarity with Photoshop, Sketch, 2D, and 3D modeling softwares.
                <br/>
                
                As a frontend web developer, I design the way people live in the virtual world with the skills of design, creativity, and flexibility as well as software engineering skills.
                <br/>
                
                I look forward to translating my skills well in the Web Development industry! 
                </p>
                <img src="about22.png" alt=""/>

                <p className='links-in-about'><a href="https://www.linkedin.com/in/sara-dzadeh/">LINKEDIN</a>
                
                <a href="https://github.com/saradzadeh">GITHUB</a>

                <p>GMAIL:sara.daghaghzadeh2@gmail.com</p>
                </p>
            </div>
            
        </section>
        
      <Route>
      <nav className='nav-in-about'>
      <Link to="/">
      <div className='home-in-about'>
          <h1>Home</h1>
          </div>
      </Link>
  </nav>
  </Route>
  </Router>
    )
}