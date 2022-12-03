import React from "react";
import "./pagescss/About.css";
function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="heading">
          <span>About US</span>
          <h3>WHY CHOOSE US?</h3>
        </div>
        <div className="about-container">
          <div className="col-1">
            <img src="images/home-img-1.png" alt="" />
          </div>
          <div className="col-2">
            <h1>Best Food In The Country</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, ad, nobis harum at error suscipit cupiditate omnis odio
              animi soluta facilis.
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                rem iusto unde labore obcaecati nam fuga cum velit non
                doloremque.
              </p>
            </p>
            <div className="three-btn">
              <button>
                <i class="fa fa-truck" aria-hidden="true"></i>
                free delivery
              </button>
              <button>
                <i class="fa fa-paypal" aria-hidden="true"></i>
                Easy Payments
              </button>
              <button>
                <i class="fa fa-briefcase" aria-hidden="true"></i>
                24/7 Service
              </button>
              <br />
              <button
                className="btn-dish"
                style={{
                  marginTop: "1em",
                  backgroundColor: "#192a56",
                  color: "#fff",
                  fontSize: "0.9em",
                }}
              >
                learn more
                <i
                  class="fa fa-arrow-right"
                  aria-hidden="true"
                  style={{
                    color: "#fff",
                    dispay: "inline-block",
                    marginLeft: "12px",
                  }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
