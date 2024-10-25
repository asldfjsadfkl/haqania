import React, { Fragment } from "react";
import Footer from "../components/Layout/Footer/Footer";
import Title from "../components/Layout/Title/Title";
import SlideSh from "../components/Layout/HeaderSlid/SlideSh";
const Home = () => {

  return (
    <Fragment>
      <Title title="NAEEM.CODECAMP" />
      <SlideSh />
      <Footer />
    </Fragment>
  );
};

export default Home;
