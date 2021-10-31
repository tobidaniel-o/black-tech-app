import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <div class="wrapper">
      <h1>BlackTech Registration Page</h1>

      <div class="container">
        <div class="div-one">
          <form class="form">
            <div class="form-label">
              <label>First Name</label>
              <input type="text" />
            </div>
            <div class="form-label">
              <label>Last Name</label>
              <input type="text" />
            </div>

            <div class="form-label">
              <label for="">Email</label>
              <input type="email" />
            </div>
            <div class="form-label">
              <label for="">Phone Number</label>
              <input type="text" />
            </div>
            <div class="form-label">
              <label for="">Address</label>
              <textarea name="" id="" cols="20" rows="3"></textarea>
            </div>
            <input type="submit" value="Submit Form" class="button" />
          </form>
        </div>
        <div class="div-two">
          <div class="div-two-container">
            <div class="div2-form-label">
              <input type="search" placeholder="Search contact..." />
              <button class="button">Click!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
