import React from "react";
import { NavLink } from "react-router-dom";
import "../../../index.css";
import "./footer.css";
const Footer = () => {
  return (
    <main className="main-footers">
      <footer className="footer-s">
        <div className="after-foooter-s-div">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <i className="fa-regular fa-brackets-curly"></i>
          </a>
          <span className="mb-3 mb-md-0 text-light">
            © 2023,MNA.CODECamp AllRight Reserved
          </span>
        </div>
        <ul className="after-footer-ul">
          <li className="after-ul-li">
            <NavLink to="/contact" className="ms-3 foooter-links fontsizes">
              رابطہ
            </NavLink>
          </li>
          <li className="after-ul-li">
            <NavLink to="/lessons" className="ms-3 foooter-links fontsizes">
              مضامین
            </NavLink>
          </li>
          <li className="after-ul-li">
            <NavLink to="/dar" className="ms-3 foooter-links fontsizes">
              دارالافتاء
            </NavLink>
          </li>
          <li className="after-ul-li">
            <NavLink to="/masayal" className="ms-3 foooter-links fontsizes">
              مسائل
            </NavLink>
          </li>
        </ul>

        {/* <ul className="after-footer-ul2">
          <li className="footer-icon">
            <NavLink
              className="text-primary"
              to="https://web.facebook.com/MNA.CODE.PK"
            >
              <i id="footer-icon" src={faFacebook} />
            </NavLink>
          </li>
          <li className="after-ul2-li2">
            <NavLink
              className="text-dark"
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fm.me%2FMNA.CODE.PK%3Ffbclid%3DIwAR0l-ColHFvujbLzVGQgf3neojvn4Dz6rkw3Dw7lSJ7NKGKuMuJIQZ7T80E&h=AT3vedOOsdhW0uG1gDZZp1TAmsxDpObqCTsfJb_SRtZAZsbDSX9q66W4xQtVDEmah5eLkPLaJIhbHLfeqq2oonKwf4ZSh6j_R89fY_tGBrWNDBdPt5VyBdCS_pvKmV23WugY"
            >
              <i id="footer-icon" src={faFacebook} />
            </NavLink>
          </li>
          <li className="after-ul2-li2">
            <NavLink
              className="text-secondary"
              to="https://mn45994445@gmail.com"
            >
              <i id="footer-icon" src={faFacebook} />
            </NavLink>
          </li>
        </ul> */}
      </footer>
    </main>
  );
};

export default Footer;
