import React from "react";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import userIcon from "../../../images/userIcon.jpg";
import "./dash.css";
const Dashboard = () => {


  return (
    <div className="main_dashBoardall">
      <div className="secondMain_indashall">
        <div className="logoandadmininfo">
          <h3 className="headerforname">Dashboard</h3>
          <div className="adminInfo">
            <img src={userIcon} alt="icon"/>
            <span className="adminspan">حضرت مولانا مفتی نعمان صاحب</span>
          </div>
        </div>
        <ul>
          <li>
            <NavLink className="span1" to="/daruliftahdash">
              DashBoard
            </NavLink>
            <span className="span2">
              <i className="fa-solid fa-heart-circle-plus" />
            </span>
          </li>
          <li>
            <NavLink className="span1" to="/teacher">
              اساتذہ
            </NavLink>
            <span className="span2">
              <i className="fa-solid fa-heart-circle-plus" />
            </span>
          </li>

          <li>
            <NavLink to="/student" className="span1">
              طلباء
            </NavLink>
            <span className="span2">
              <i className="fa-solid fa-users" />
            </span>
          </li>
          <li>
            <NavLink to="/lessons" className="span1">
              مضامین
            </NavLink>
            <span className="span2">
              <i className="fa-solid fa-book" />
            </span>
          </li>
          <li>
            <span className="span1">امتحانات</span>
            <span className="span2">
              <i className="fa-solid fa-book" />
            </span>
          </li>
          <li>
            <span className="span1">پوزیشن ہولڈر طلباء</span>
            <span className="span2">
              <i className="fa-solid fa-graduation-cap" />
            </span>
          </li>
          <li>
            <span className="span1">نظام</span>
            <span className="span2">
              <i className="fa-solid fa-school" />
            </span>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
