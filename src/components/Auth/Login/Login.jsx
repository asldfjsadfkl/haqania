import React, { useState } from "react";
import axios from "axios";
import server from "../../../server";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import NodeLoader from "../../Layout/Loader/NodeLoader.jsx";
import { Bad } from "../../AlertFunc/ErrorAlert.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const Form = new FormData(e.currentTarget);
    const data = Object.fromEntries(Form);

    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      setLoading(true);
      await axios.post(`${server}/register`, data, config);
      setLoading(false);
      navigate("/");
      window.location.reload();
    } catch (error) {
      if (error?.response?.status === 401) {
        Bad("invalid data");
        setLoading(false);
      }
    }
  };

  return (
    <div className="bodyofloginform">
      {loading ? <NodeLoader /> : ""}
      <form action="POST" onSubmit={handleSubmit} className="formoflogin">
        <section className="userlagin">Registration</section>
        <div className="divoflogin">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="inputsoflogin"
            autoComplete="off"
            required
          />
        </div>
        <div className="divoflogin">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="inputsoflogin"
            autoComplete="off"
            required
          />
        </div>
        <div className="divoflogin">
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            className="inputsoflogin"
            autoComplete="off"
            required
          />
        </div>
        <div className="divoflogin">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="inputsoflogin"
            autoComplete="off"
            required
          />
        </div>
        <button type="submit" className="continue">
          Submit
        </button>
        <NavLink to="/login1">If you already registered click here...</NavLink>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
