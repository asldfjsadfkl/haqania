import React, { useState } from "react";
import menuIcon from "../../../fonts/menuIcon.png";
import classNames from "classnames";
import WebFont from "webfontloader";
import "./nav.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import server from "../../../server";
const Nav = () => {
  const [auth, setAuth] = useState();
  const [menu, setMenu] = useState(false);
  // console.log(auth);
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "droid Sans", "Chilanka"],
      },
    });
    async function got() {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        };
        const data = await axios.get(`${server}/getuser`, config);
        setAuth(data?.data?.user?.role);
      } catch (error) {}
    }
    got();
  }, []);

  // const [open, setOpen] = React.useState(false);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // console.log(menu);
  return (
    <>
      <nav className="navbar_main">
        {/* ///// */}
        <div className="navbar_logo">
          دارالعلوم حقانیہ امدادیہ لورالائی
          <img
            onClick={() => setMenu(menu ? false : true)}
            className="spanForlogo"
            src={menuIcon}
            alt=""
          />
        </div>

        <ul className={menu ? "navul" : "hideMenu"}>
          <li
            className={classNames(
              auth !== "admin" ? "no-displayfordashboard" : "lists"
            )}
          >
            <NavLink
              to="/dash"
              className="navlink"
              onClick={() => setMenu(false)}
            >
              DashBoard
            </NavLink>
          </li>

          <li className="lists">
            <NavLink to="/" className="navlink" onClick={() => setMenu(false)}>
              سرورق
            </NavLink>
          </li>

          <li>
            <div className="dropdown">
              <button className="dropbtn">
                <i className="fa fa-caret-down"></i>
                <NavLink to="/dar">دارالافتاء</NavLink>
              </button>
              <div className="dropdown-content">
                <NavLink
                  className={classNames(
                    auth !== "admin" ? "no-displayfordashboard" : "navlinks"
                  )}
                  to="/question"
                >
                  سوالات کے جوابات لکھیں
                </NavLink>
                <NavLink className="navlinks" to="/quetoanswer">
                  سوالات
                </NavLink>
                <NavLink className="navlinks" to="/masayal">
                  مسائل
                </NavLink>
                <NavLink className="navlinks" to="/ask">
                  مسئلہ پوچھیے
                </NavLink>
              </div>
            </div>
          </li>
          <li className="lists">
            <NavLink
              to="/lessons"
              className="navlink"
              onClick={() => setMenu(false)}
            >
              مضامین
            </NavLink>
          </li>
          <li className="lists">
            <NavLink
              to="/contact"
              className="navlink"
              onClick={() => setMenu(false)}
            >
              رابطہ
            </NavLink>
          </li>
          <li className="lists">
            <NavLink className="navlink" onClick={() => setMenu(false)}>
              courses
            </NavLink>
          </li>
          <li className="lists">
            {!auth ? (
              <NavLink
                to="/login"
                className="navlink"
                onClick={() => setMenu(false)}
              >
                Register
              </NavLink>
            ) : (
              <NavLink
                to="/user"
                className="navlink"
                onClick={() => setMenu(false)}
              >
                Logout
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
