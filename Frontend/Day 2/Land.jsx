import React from 'react';
import './Land.css'; // Import your CSS file
import  { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <div>
      <nav id='nav'>
        <label htmlFor="name" id="logo-text">
          <a href="#">DK Learning Skool</a>
        </label>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="toggle">
          <i className="fa-solid fa-bars-staggered"></i>
        </label>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">FEATURES</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="/adminlog" className="active">ADMIN</a></li>
          <li><a href="/login" className="active">USER</a></li>
          <li><a href="/stafflog" className="active">STAFF</a></li>
          
        </ul>
       
         
        
      </nav>
      <header>
        <div id="header-container">
          <div id="header-page-title">
            <h2>ENROLLMENTS ARE OPEN FOR FEB 2024! <br /> </h2>
            <h3><p>All courses are completely free to enrol and learn from. The certification exam is optional and comes at a fee of Rs 1000/course exam.</p></h3>
          </div>
          <div id="header-page-image">
            <img src="https://img.freepik.com/free-vector/hand-drawn-online-tutor-illustration_52683-146749.jpg?w=900&t=st=1708584275~exp=1708584875~hmac=448fc2907ac4f89f736a6504876279e13e184377c138d4b8ac8fb6afc9b9916f" alt="" />
          </div>
        </div>
      </header>
      {/* Add the rest of your HTML code here */}
    </div>
  );
}

export default Landingpage;
