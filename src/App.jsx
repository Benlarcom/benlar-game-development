import { useState } from 'react'
import './App.css'
import icon from './assets/images/icon-makleo.png'

function App() {

  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    });
  });

  return (
    <main>
      <header class="site-header">
        <div class="logo">
          <img src="BrandLogo_LightMode.jpg" />
        </div>
        <div class="title">
          <h1>THE SHOP 
            <span> BENLARPRESENTATIONS</span>
          </h1>
          <p>Genre: 
            <span> 2D Fashion Shop Simulator</span>
          </p>
        </div>
        <button class="get-started">Get Started</button>
      </header>


      

      <div>
        <h3>Welcome</h3>
        <p>Locked in. No distractions. Here for fun, staying for the wins.</p>
      </div>

      <div className="game-goes-here">
        <div className="border-div">
        <div>
        <ul className="grid-list">
          <li>1
            <span> (start)</span>
          </li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8 <span className="checkpoint">(Hi, this is a checkpoint)</span></li>
          <li>9</li>
          <li>10 <span className="checkpoint">(Hi, this is a checkpoint)</span></li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15 <span className="checkpoint">(Hi, this is a checkpoint)</span></li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20
            <span> (end)</span>
          </li>
        </ul>
      </div>
      </div>
      </div>

      <h2>Friends</h2>
      <p>Find players...</p>
      <div class="carousel">
        
        <div class="card active">
          <img src={icon} alt="player profile image" />
          Magnus Carlsen</div>
        <div class="card">
          <img src={icon} alt="player profile image" />
          Fabiano Caruana</div>
        <div class="card">
          <img src={icon} alt="player profile image" />
          Hikaru Nakamura</div>
        <div class="card">
          <img src={icon} alt="player profile image" />
          Nodirbek Abdusattorov</div>
      </div>

      <footer className="footer">
        <div className="footer-left"><h2>BENLARCREATIVES <span><a href="https://github.com/Benlarcom"><i className="bi bi-github"></i> LeonardMDev</a></span> </h2> 
            <p>Game Development</p>
            <p>Genre:
              <span> 2D Fashion Shop Simulator</span>
            </p>
        </div>

        <div className="footer-right">
            <button className="contact-btn">Get In Touch</button>

            <div className="contact-socials">
                <a href="https://www.linkedin.com/in/leonard-makgopa"><i className="bi bi-linkedin"></i> LinkedIn</a>
                <a href="https://github.com/Benlarcom"><i className="bi bi-github"></i> GitHub</a>
                <a href="#"><i class="bi bi-youtube"></i> YouTube</a>
            </div>
        </div>

        <div className="footer-bottom">
            &copy; 2026 BENLARCREATIVES. All rights reserved.
        </div>
      </footer>
    </main>
  )
}

export default App
