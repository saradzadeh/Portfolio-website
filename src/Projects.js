import './Projects.css';
import React, { Component } from 'react'
import {HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'




export default function Projects(){
    return (
        <Router>
        <section className='projects-title'>
            <h1>MY PROJECTS</h1>
        </section>

        <p className='logo-img'>
                <img src="html.png" alt=""/>
                <img src="js.jpg" alt=""/>
                <img src="ruby-logo.png" alt=""/>
                <img src="css.png" alt=""/>
                <img src="react.png" alt=""/>
        </p>

        <div className='projects-img-finder'>

            <img src="Find_TableCOMPLETE.gif" alt=""/>
            <p>BURGER TRACKER
                <br/>
            <a href="https://github.com/saradzadeh/find_table">THE GITHUB REPOSITRY</a>
                <br/>
            <a href="https://findatableapp.herokuapp.com/">CLICK HERE TO TRY IT</a>
            </p> 

        </div>
        

        <div className='projects-img-dam'>
            <img src="tictactoe.gif" alt=""/>
            <p>TIC TAK TOE
                <br/>
            <a href="https://git.generalassemb.ly/saradzadeh/tic-tac-toe">THE GITHUB REPOSITRY</a>
                <br/>
            <a href="https://pages.git.generalassemb.ly/saradzadeh/tic-tac-toe/">CLICK HERE TO TRY IT</a>
            </p>
        </div>


        <div className='projects-img-tictactoe'>
            <img src="DAM.gif" alt=""/>
            <p>DIGITAL ART MAGAZINE
                <br/>
            <a href="https://git.generalassemb.ly/saradzadeh/digital-art-magazine">THE GITHUB REPOSITRY</a>
                <br/>
            <a href="https://still-ridge-19152.herokuapp.com/">CLICK HERE TO TRY IT</a>
            </p>
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
