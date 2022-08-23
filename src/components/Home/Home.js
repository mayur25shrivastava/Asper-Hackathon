import React from 'react'
import {Link} from 'react-router-dom'
import Indivisual from '../Indivisual/Indivisual'
import Team from '../Team/Team'
import "./Home.css"

function Home() {
  return (
    <div>
    
    <div className='profile-container'>
      <div className="profile-parent">
        <div className="profile-details">
            <div className="colz">

                <div className="colz-icon">
                    <a href="#">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-google-plus-square"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-youtube-square"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                </div>
                
            </div>

            <div className="profile-details-name my-4">
                <span className='primary-text'>
                    {" "}
                    Hello, Welcome to Team <span className='highlighted-text'>Asper</span>
                </span>
            </div>
            <div className="profile-details-role my-4">
                <span className="primary-text">
                    {" "}
                    <h1>
                        Welcome to Team Asper Portfolio 
                    </h1>
                    <span className='profile-role-tagline'>
                        Know The Profiles of Various Members of Team Asper
                    </span>
                </span>
            </div>
            <div className="profile-options my-4">
                
                    <Link to="/profile" className='text-white'><button className='btn primary-btn my-4'>
                    {""}
                    Know More About Us{" "}
                </button></Link>

                <a href="del.pdf" download='deleteIt.pdf'>
                    <button className='btn highlighted-btn mx-2'>Download Resume</button>
                </a>
            </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>


      </div>
    </div>

         <Team/>

        <Indivisual/>
		{/* <ul>
        <li>

          <Link to="/">Home</Link>
        </li>
        <li>

          <Link to="/">Home page</Link>
        </li>
      
      </ul> */}

    <footer>
    <p className='my-2'>Author: Mayur Shrivastava</p><br />
    <a href="mailto:hege@example.com">mayur1234shrivastava@gmail.com</a>
    </footer>






    </div>
  )
}


export default Home
