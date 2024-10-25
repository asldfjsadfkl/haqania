import React from "react";
import Errors from "./Error.module.css";
import imgerror from "../../../images/errors.png";
import Title from "../Title/Title";
const Error = () => {
  return (
    <>
      <Title title="PAGE NOT FOUND" />
      <img className={Errors.img} src={imgerror} alt="img" />
    </>
  );
};

export default Error;
