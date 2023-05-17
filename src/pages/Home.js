import React from 'react';
import {Link } from 'react-router-dom';
import BannerImage from  "../assets/pizza.jpeg"
import '../styles/Home.css'
const Home=()=>{
  return (
    <div className="home" style={{backgroundImage:`url(${BannerImage}) `}}>
        
        <div className="headerContainer" >
            <h1>My Pizzeria</h1>
            <p> Pizza To Fit Any Taste</p>
            <Link to ="/menu">
                <button>Order Now</button>
            </Link>
            
        </div>
        
    </div>
  )
}

export default Home