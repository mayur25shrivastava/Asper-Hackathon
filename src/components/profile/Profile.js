import React from 'react'
import {Link} from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import block from "../../assets/Home/bb101-1.png";
import bit from "../../assets/Home/cfb-1.png";
import beg from "../../assets/Home/cfb-1.png";
import defi from "../../assets/Home/defi1.png";
import dapp from "../../assets/Home/ed1.png";
import eth from "../../assets/Home/eth1.png";
import js from "../../assets/Home/js.png";
import link from "../../assets/Home/link.png";
import dot from "../../assets/Home/polkadot.png";
import react from "../../assets/Home/react.png";
import contract1 from "../../assets/Home/sc1.png";
import contract2 from "../../assets/Home/sc2.png";
import security from "../../assets/Home/scs.png";




// import bit from "./images/bsc.png";
// import beg from "./images/cfb-1.png";
// import defi from "./images/defi1.png";
// import dapp from "./images/ed1.png";
// import eth from "./images/eth1.png";
// import js from "./images/js.png";
// import link from "./images/link.png";
// import dot from "./images/polkadot.png";
// import react from "./images/react.png";
// import contract1 from "./images/sc1.png";
// import contract2 from "./images/sc2.png";
// import security from "./images/scs.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Profile.css";


// project images 
import img1 from "../../assets/Home/proj1.jpg"
import img2 from "../../assets/Home/proj3.png"
import img3 from "../../assets/Home/proj5.jfif"
import img4 from "../../assets/Home/proj2.jfif"
import img5 from "../../assets/Home/proj7.jfif"

SwiperCore.use([Pagination, EffectCoverflow]);



function Profile() {
  return (
    <div>

      
        <Link to="/" className='text-primary float-left'>Go To Home</Link>
      <br />



<div className="container my-4">

<h1 className='my-4'>Some Projects Of Member of Asper</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
    <div class="card h-100">
      <img src={img1} height="250rem" width="250rem" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Project 1</h5>
        <p class="card-text">This is a Social Media Website, I Uses MongoDb as Database and React as a frontend Framework, For Backend, I Uses Django</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={img2} height="250rem" width="250rem"  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Project 2</h5>
        <p class="card-text">This is a Social Media Website, I Uses MongoDb as Database and React as a frontend Framework, For Backend, I Uses Django</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={img3} height="250rem" width="250rem"  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Project 3</h5>
        <p class="card-text">This is a Social Media Website, I Uses MongoDb as Database and React as a frontend Framework, For Backend, I Uses Django</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={img5} height="250rem" width="250rem"  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Project 4</h5>
        <p class="card-text">This is a Social Media Website, I Uses MongoDb as Database and React as a frontend Framework, For Backend, I Uses Django</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={img4} height="250rem" width="250rem"  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Project 5</h5>
        <p class="card-text">This is a Social Media Website, I Uses MongoDb as Database and React as a frontend Framework, For Backend, I Uses Django</p>
      </div>
    </div>
  </div>
</div>
</div>

















      {/* certificate section  */}

       <div className="bg-certificats">
      <h2 className="heading">Certificates</h2>
      <p className="text">See Asper Member's certificates by scrolling the Slider </p>

      <div className="slideshow">
        <Swiper
          grabCursor={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 5,
            stretch: 20,
            depth: 75,
            modifier: 6,
            slideShadows: false,
          }}
          pagination={{
            clickable: true, 
            type: "fraction",
          }}
        >
          <SwiperSlide>
            <img src={contract2} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={js} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={react} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={link} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dapp} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={block} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bit} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={beg} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={defi} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dot} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={eth} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contract1} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={security} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>

    </div>
  )
}

export default Profile
