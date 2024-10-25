import React from "react";
import coolkid from "../images/coolkid.png";
import "../styles/About.css";
import Title from "../components/Layout/Title/Title";
import Footer from "../components/Layout/Footer/Footer";
const About = () => {
  return (
    <>
      <Title title="ABOUT US" />
      <article className="man-about">
        <main className="main_about">
          <div className="first">
            <h3>WHAT IS MERN STACK AND ITS BENEFITS ?</h3>
            <p className="text-start content">
              Do you often have brilliant product ideas pop into your head? Yet,
              you’re not entirely sure which technology or framework to use.
              Well, don’t worry. We are here to help you out. The development
              industry has substantially improved. And you can gain benefit from
              it. The ability to work on various original and cutting-edge
              online designs is possible when you want to create a web app for
              your start-up idea. All famous tech solutions were created using a
              “tech stack,” or collection of dependable and scalable
              technologies that are now ruling the web development industry. If
              you are one of those start-up companies that want the advantage of
              rapid web development and high efficiency, then you must choose
              the MERN stack and Hire MERN stack developers to provide customers
              with an exceptional web experience. Are you wondering how?
              Introduction of the MERN stack, its features, and MERN stack use
              cases help us realize why you should start thinking about it for
              your brand. Now that you are intrigued let’s dive in!
            </p>
          </div>

          <div className="second">
            <img src={coolkid} className="img_about" alt="img" />
          </div>
        </main>
      </article>
      <Footer />
    </>
  );
};

export default About;
