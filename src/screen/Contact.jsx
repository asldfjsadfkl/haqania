import React from "react";
import axios from "axios";
import server from "../server.js";
import "../styles/contact.css";
import Footer from "../components/Layout/Footer/Footer";

const Contact = () => {
  const submitForm = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const data = Object.fromEntries(formdata);
    await axios.post(`${server}/contact/contactform`, data);
    console.log(data);
  };
  return (
    <>
      <div className="backgroundofcontact">
        <div className="container1ofcontact">
          <div className="screenofcontact">
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="contact-number">
                  CONTACT INFO : +923462282762
                </div>
              </div>
              <div className="screen-body-item">
                <form className="app-form" onSubmit={submitForm}>
                  <div className="formgroupfor-contact">
                    <input
                      type="text"
                      name="text"
                      disabled
                      className="app-form-control"
                      placeholder="Darul-uloom Haqania"
                    />
                  </div>
                  <div className="formgroupfor-contact">
                    <input
                      type="email"
                      name="email"
                      className="app-form-control"
                      placeholder="EMAIL"
                    />
                  </div>
                  <div className="formgroupfor-contact">
                    <input
                      type="number"
                      name="phone"
                      className="app-form-control"
                      placeholder="CONTACT NO"
                    />
                  </div>
                  <div className="formgroupfor-contact messageofcontact">
                    <input
                      type="text"
                      name="message"
                      className="app-form-control"
                      placeholder="MESSAGE"
                    />
                  </div>
                  <div className="formgroupfor-contact buttons">
                    <button className="formofcontact-button">CANCEL</button>
                    <button className="formofcontact-button" type="submit">
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="credits">
            inspired by
            <a className="credits-link" href="/" target="_blank">
              <svg className="dribbble" viewBox="0 0 200 200">
                <g stroke="#ffffff" fill="none">
                  <path
                    d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345"
                    strokeWidth="20"
                  ></path>
                  <path
                    d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951"
                    strokeWidth="20"
                  ></path>
                  <path
                    d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103"
                    strokeWidth="20"
                  ></path>
                </g>
              </svg>
              MNA
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
