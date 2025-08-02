import React from "react";
import logo from "../assets/images/expedia.webp";
import cross from "../assets/images/cross_2.svg";
import { NavLink } from "react-router-dom";
// import '../styles/style.css'; // Adjust the path based on the actual location of style.css

function pop_up() {
  // const handRedirect = ()=>{
  //   window.location.href = "/home";
  // }
  function handleRedirect(){
    window.location.href = "/home";
  }
  return (
    <>
      <style>
        {`
        body {
    font-family: Arial, sans-serif;
    background: #fff;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #111;
  }
  
  .container-2 {
    padding: 30px 20px;
    max-width: 600px;
    margin: auto;
  }
  
  .logo-2 {
    width: 200px;
    margin-bottom: 10px;
  }
  
  .promo-text {
    color: #3f00ff;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .call-button {
    display: inline-block;
    padding: 12px 20px;
    font-weight: bold;
    border-radius: 8px;
    margin: 10px auto;
    cursor: pointer;
    font-size: 18px;
  }
  
  .primary {
    background-color: #f4c430;
    color: #000;
  }
  
  .secondary {
    border: 2px solid #f4c430;
    background-color: white;
    color: #000;
  }
  
  .phone-icon {
    margin-right: 10px;
  }
  
  .support-text {
    font-weight: bold;
    margin: 20px 0;
  }
  
  .agent {
    position: relative;
    display: inline-block;
    margin-bottom: 20px;
  }
  
  .agent-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  
  .status-dot {
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 12px;
    height: 12px;
    background-color: #4caf50;
    border-radius: 50%;
    border: 2px solid white;
  }
  
  .button-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 20px 0;
  }
  
  .button-grid button {
    padding: 12px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 10px;
    cursor: pointer;
    background: white;
    transition: 0.3s;
  }
  
  .button-grid button:hover {
    background-color: #f4f4f4;
  }
  
  .call-section {
    margin-top: 30px;
  }
    button{
    color: black;
    }
    .promo-text{
    font-size: 1.7rem; 
    margin-top: 20px;
    }
    .cross{
    display: flex;
    height: 40px;
    justify-content: right;
    }
    .cross img{
    height: 100%;
    width: 40px;
    }
    @media(max-width: 500px){
        .cross{
        display: flex;
        height: 25px;
        width: 100%;
        justify-content: right;
        }
        .cross img{
          height: 100%;
          width: 25px;
          }
        }
  
        `}
      </style>
      <div className="container-2">
        <div className="cross">
          <NavLink to="/home">
          <img src={cross}
          alt="" /></NavLink>
          
        </div>
        <img src={logo} class="logo" alt="Expedia Logo" />

        <h2 class="promo-text">EXCLUSIVE TRAVEL OFFER – SAVE 25%!</h2>

        <div class="call-button primary">
          <span class="phone-icon">📞</span> +1 (888) 394-9616
        </div>

        <p class="support-text">24x7 RESERVATION SUPPORT</p>

        <div class="agent">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Agent"
            class="agent-img"
          />
          <div class="status-dot"></div>
        </div>

        <div class="button-grid">
          <button>Ticket Booking</button>
          <button>Manage Booking</button>
          <button>Cancellation</button>
          <button>Customer Support</button>
        </div>

        <div class="call-section">
          <p>📶 Get 25% – Call Now</p>
          <div class="call-button secondary">
            <span class="phone-icon">📞</span> +1 (888) 394-9616
          </div>
        </div>
      </div>
    </>
  );
}

export default pop_up;