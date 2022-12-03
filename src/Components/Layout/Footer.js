import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="Nav-list1">
          <div className="heading">
            <h1>locations</h1>
          </div>
          <ul className="nav-ul">
            <li className="footer-item">
              <a href="#">UK</a>
            </li>
            <li className="footer-item">
              <a href="#">USA</a>
            </li>
            <li className="footer-item">
              <a href="#">Japan</a>
            </li>
            <li className="footer-item">
              <a href="#"> france</a>
            </li>
          </ul>
        </div>
        <div className="Nav-list1">
          <div className="heading">
            <h1>Quick Links</h1>
          </div>
          <ul className="nav-ul">
            <li className="footer-item">
              <a href="#">Home</a>
            </li>
            <li className="footer-item">
              <a href="#">About</a>
            </li>
            <li className="footer-item">
              <a href="#">Dishes</a>
            </li>
            <li className="footer-item">
              <a href="#">Order</a>
            </li>
            <li className="footer-item">
              <a href="#">Review</a>
            </li>
          </ul>
        </div>
        <div className="Nav-list1">
          <div className="heading">
            <h1>contact info</h1>
          </div>
          <ul className="nav-ul">
            <li className="footer-item">
              <a href="#">+123-345-678</a>
            </li>
            <li className="footer-item">
              <a href="#">+123-345-678</a>
            </li>
            <li className="footer-item">
              <a href="#">abc@gmail.com</a>
            </li>
            <li className="footer-item">
              <a href="#">abc@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="Nav-list1">
          <div className="heading">
            <h1>follow us</h1>
          </div>
          <ul className="nav-ul">
            <li className="footer-item">
              <a href="#">linkedin</a>
            </li>
            <li className="footer-item">
              <a href="#">Facebook</a>
            </li>
            <li className="footer-item">
              <a href="#">Instagram</a>
            </li>
            <li className="footer-item">
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
