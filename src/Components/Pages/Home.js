import React from "react";
import "./pagescss/Home.css";
import Review from "./Review";

function Home() {
  return (
    <div>
      {/* home section starts   */}

      <section className="home" id="home">
        <div className="home-container">
          <div className="banner">
            <div className="content" style={{ marginTop: "1em" }}>
              <div className="heading">
                <span>our special dish</span>
                <h3>spicy noodles</h3>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                natus dolor cumque Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <a href="/s" className=" btn-banner">
                order now
              </a>
            </div>
            <div className="image">
              <img src="images/home-img-1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="components-land"></div>
    </div>
  );
}

export default Home;
