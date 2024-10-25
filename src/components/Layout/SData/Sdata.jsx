import React, { Fragment } from "react";
import "./sdata.css";
import { NavLink } from "react-router-dom";

const Sdata = ({ item }) => {
  return (
    <Fragment>
      {item && item?.blog[0]?.author !== undefined ? (
        <div className="smain">
          <NavLink to={`/blog/${item && item?.blog[0]?._id}`}>
            <div className="contofsdata">
              <div className="stitle">{item && item?.blog[0]?.title}</div>
              <div className="sdate">{item && item?.blog[0]?.date}</div>
            </div>
            <div className="sauthor">{item && item?.blog[0]?.author}</div>
            <div className="stext" maxLength="30">
              {item && item?.blog[0]?.text}
            </div>
          </NavLink>
        </div>
      ) : (
        <div> Not found!</div>
      )}
    </Fragment>
  );
};

export default Sdata;
