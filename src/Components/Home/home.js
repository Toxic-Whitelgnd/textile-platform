import React from 'react';
import img1 from "../../Assests/homeimg.png"
import HomeAboutus from '../AboutUs/HomeAboutus';
import HomeOrder from '../Orders/HomeOrder';
import HomeProducts from '../Products/HomeProducts';

const Home = () => {
    return (
        <>
        
        <div className="container Hero mt-10 ">
        <div className="row mb-32">
          <div className="col-lg-8 d-flex flex-column justify-content-center fw-bold">
            <h1 className="pt-5">
              The best <span className="text-slate-400">Textile platforms</span>{" "}
              for a successful online store
            </h1>
            <div className=" subtitle pt-5">
            <p>
              <span className="text-slate-600">
                Life's too short for bad software.
              </span>{" "}
              We're constantly using, reviewing and comparing all tools on the
              market, then report back everything, so you can make informed
              decisions and choose the absolute best solutions for you.
            </p>
          </div>
          </div>
          <div className="col-lg-4">
            <img src={img1} alt="cartimg" className="img-fluid"  />
          </div>
          
        </div>
        
      </div >
      <div className='m-4'>
      <HomeProducts />
      </div>
      <div className='m-4'>
        <HomeOrder />
      </div>
      <div className='m-4'>
        <HomeAboutus />
        </div>
      
      </>
    );
}

export default Home;
