import './Resume.css';
import React, { Component } from 'react'
import {HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'



export default function Resume(){
    return (
        <Router>
        <section className='title-in-cv'>
            <h1>LOOK AT MY CV</h1>
        </section>

        <div className='grid-cv'>
        <div className='left-box'>
            <img src="cvimage.png" alt=""/>
        </div>
        <div className='cv-link'>
            <a href="">LOOK AT MY CV</a>
        </div>
        </div>

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
