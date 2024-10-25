import React, { useState } from "react";
import axios from "axios";
import server from "../../../server";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../../../images/buld.jpg";
import "./login1.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bad } from "../../AlertFunc/ErrorAlert";
import NodeLoader from "../../Layout/Loader/NodeLoader";

const Login1 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    try {
      setLoading(true);
      await axios.post(`${server}/login`, data, config);
      setLoading(false);
      navigate("/");
      window.location.reload();
    } catch (error) {
      if (error?.response?.status === 400) {
        Bad("inValid data");
      }
    }
    setLoading(false);
  };

  return (
    <div className="bodyofloginform1">
      <div className="containerfor-img-form1">
        <img className="imgoflogin1" src={img} alt="yy" />

        {loading ? <NodeLoader /> : ""}
        <form action="POST" onSubmit={handleSubmit} className="formoflogin1">
          <section className="userlagin1">User Login</section>
          <div className="divoflogin1">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="inputsoflogin1"
              required
            />
          </div>
          <div className="divoflogin1">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="inputsoflogin1"
              autoComplete="off"
              required
            />
          </div>

          <button type="submit" className="continue1">
            Submit
          </button>
          <NavLink to="/forgetpassword">Forgot Password</NavLink>
          <NavLink to="/login">If you are new click here...</NavLink>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login1;
