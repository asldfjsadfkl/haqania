import React from "react";
import axios from "axios";
import server from "../../../server.js";
import "./forget.css";
const ForgetPassword = () => {
  const ForgetPassword = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    console.log(data);
    try {
      await axios.post(`${server}/forgetpassword`, data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
    } catch (error) {}
  };

  return (
    <>
      <div className="mainForget">
        <form
          action="PATCH"
          onSubmit={ForgetPassword}
          className="formOF-forgetPassword"
        >
          <section className="headerofforget">ForgetPassword</section>
          <input
            required
            className="inputOF-forgetpass"
            name="email"
            type="email"
            placeholder="Confirm your Email"
          />
          <div className="mainof-button-forgetpassword">
            <button type="submit" className="save-forgetPassword">
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
