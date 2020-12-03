import './Home.css';
import {HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'


export default function Home(){
    return (
        <Router>
      <div className='home-grid'>
          <aside>
              {/* <h1>HI I AM SARA</h1> */}
          </aside>
          
          <section className='photo'>
              <img src="portfoliofinal.png" alt=""/>
          </section>

      </div>
      <Route>
      <nav>
      <Link to="/">
      <div className='home'>
          <h1>Home</h1>
          </div>
      </Link>

      <Link to="/about">
          <div className='contact'>
          <h1>ABOUT</h1>
          </div>      
      </Link>

      <Link to="/cv">
          <div className='resume'>
          <h1>CV</h1>
          </div>      
      </Link>

      <Link to="/projects">
          <div className='projects'>
          <h1>PROJECTS</h1>
          </div>
      </Link>

  </nav>
  </Route>
  </Router>
    )
}


