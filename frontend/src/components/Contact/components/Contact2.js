import React from "react";
import "./Contact2.css";
//import avatar_man from "../avatar_man.png";
//import avatar_student from "../avatar_student.png";

export default function Contact2() {
  return (
    <>
      <div className="split-container my-2">
        <div className="split left">
          <div className="centered">
            <h2>To work with us </h2>
                        <h2>As developer</h2>
            <ul className="handels">
              <li>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <p>Facebook id</p>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <p>Twitter id</p>

              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
                <p>Instagram id</p>

              </li>
              <li>
                <a href="/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <p>Linkedin id</p>

              </li>
            </ul>
          </div>
        </div>

        <div className="split right">
          <div className="centered">
            <h2>To Contact us</h2>
            
            <h2>As Teacher/Student</h2>
            <ul className="handels">
              <li>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <p>Facebook id</p>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <p>Twitter id</p>

              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
                <p>Instagram id</p>

              </li>
              <li>
                <a href="/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <p>Linkedin id</p>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}