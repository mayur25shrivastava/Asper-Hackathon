import React from 'react'
import {data} from "./IndiArray"
import "./Indivisual.css"
import {Link} from "react-router-dom"


function Indivisual() {
  return (
    <div>
      <section id="projects">
      <h5>View Our Team's</h5>
      <h2>Profile</h2>

      <div className="container githubRepo_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="githubRepo_item">
              <div className="gitProject_item_image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="githubRepo_item_cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                
                <a
                  
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link to="/profile" className='text-white'>Profile</Link>
                </a>
              </div>
              
            </article>
          );
        })}
      
      </div>
    </section>
    </div>
  )
}

export default Indivisual
