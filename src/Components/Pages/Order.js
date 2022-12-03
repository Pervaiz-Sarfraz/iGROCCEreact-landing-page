import React from "react";

function Order() {
  return (
    <>
      <section className="order" id="Order">
        <div className="heading">
          <span>Order Now</span>
          <h3>Free And Fast</h3>
        </div>
        <form action="">
          {/* 1 */}
          <div className="inputbox">
            <div className="label-input">
              <div className="col-div1">
                <label htmlFor="">Your Name:</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>

              <div className="col-div2">
                <label htmlFor=""> Your Number:</label>
                <input type="text" placeholder="Enter Your Mush" />
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="inputbox">
            <div className="label-input">
              <div className="col-div1">
                <label htmlFor=""> Your Order:</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>

              <div className="col-div2">
                <label htmlFor=""> Extra Food:</label>
                <input type="text" placeholder="Enter Your Mush" />
              </div>
            </div>
          </div>
          {/* 3 */}

          <div className="inputbox">
            <div className="label-input">
              <div className="col-div1">
                <label htmlFor=""> Yout Musch:</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>

              <div className="col-div2">
                <label htmlFor=""> Date And Time :</label>
                <input type="text" placeholder="Enter Your Mush" />
              </div>
            </div>
          </div>
          {/* 4 */}

          <div className="inputbox">
            <div className="label-input">
              <div
                className="col-div1"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor=""> Your Message:</label>
                <textarea name="" cols="20" rows="10"></textarea>{" "}
              </div>

              <div
                className="col-div2"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor=""> Your Message:</label>
                <textarea name="" cols="20" rows="10"></textarea>
              </div>
            </div>
          </div>
          <button className="btn-banner">Submit Now</button>
        </form>
      </section>
    </>
  );
}

export default Order;
