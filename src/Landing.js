import React, { Component } from 'react'

import {HashRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'
  import Projects from './Projects.js'
  import Resume from './Resume.js'
  import About from './About.js'
  import Home from './Home.js'



//   function Home(){
//       return (
//         <div className='home-grid'>
//             <aside>
//                 {/* <h1>HI I AM SARA</h1> */}
//             </aside>
            
//             <section className='photo'>
//                 <img src="portfoliofinal.png" alt=""/>
//             </section>

//         </div>
//       )
//   }


//   function About(){
//       return (
//           <section>
//               <h1>About Me</h1>
//               <p>Hey, I am Sara</p>
//           </section>
//       )
//   }

//   function Resume(){
//     return (
//         <section>
//             <h1>my resume</h1>
//         </section>
//     )
// }


//   function Projects(){
//       return (
//           <section>
//               <p>the TIC TAK TOE</p>
//               <p>DIGITAL ART MAGAZINE</p>
//               <p>BURGER TRACKER</p>
//           </section>
//       )
//   }




 class Landing extends React.Component {
    render() {
        return (
            <Router>
            <div>
                

                    <Switch>
                    <Route path= "/cv">
                        <Resume />
                    </Route>

                    <Route path= "/about">
                        <About />
                    </Route>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/projects">
                        <Projects />
                    </Route>
                    
                    </Switch>
                            
            </div>
            </Router>
            
        )
    }
    
}

export default Landing