import React from "react";
import { NavLink } from "react-router-dom";
import Info from "../components/Layout/Info";
import "../styles/service.css";
import Footer from "../components/Layout/Footer/Footer";
const Service = () => {
  return (
    <>
      <article className="art_mains">
        <Info
          icon={<i className="fa-brands fa-html5 fa-lg"></i>}
          head="HTML5"
          content="HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content, And for more search..."
          button={
            <NavLink to="https://en.wikipedia.org/wiki/HTML" target="_blank">
              ReadMore
            </NavLink>
          }
        />

        <Info
          icon={<i className="fa-brands fa-css3 fa-lg"></i>}
          head="CSS3"
          content="Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable..."
          button={
            <NavLink to="https://en.wikipedia.org/wiki/CSS" target="_blank">
              ReadMore
            </NavLink>
          }
        />

        <Info
          icon={<i className="fa-brands fa-js fa-lg"></i>}
          head="javaScript"
          content="JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS..."
          button={
            <NavLink
              to="https://en.wikipedia.org/wiki/JavaScript"
              target="_blank"
            >
              ReadMore
            </NavLink>
          }
        />

        <Info
          icon={<i className="fa-brands fa-react fa-lg"></i>}
          head="React JS"
          content="React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community ..."
          button={
            <NavLink
              to="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
              target="_blank"
            >
              ReadMore
            </NavLink>
          }
        />

        <Info
          icon={<i className="fa-brands fa-node-js fa-lg"></i>}
          head="Node JS"
          content="Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations..."
          button={
            <NavLink to="https://en.wikipedia.org/wiki/Nodejs" target="_blank">
              ReadMore
            </NavLink>
          }
        />

        <Info
          icon={<i className="fa-solid fa-database fa-lg"></i>}
          head="MongoDB"
          content="MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas..."
          button={
            <NavLink
              to="https://www.bing.com/ck/a?!&&p=aa5637fb50d1e0b1JmltdHM9MTY3OTc4ODgwMCZpZ3VpZD0wNzNmNzY0Yy00ZGMwLTZiMjktM2RiMi02NDk2NGNkNDZhNWImaW5zaWQ9NTIxOQ&ptn=3&hsh=3&fclid=073f764c-4dc0-6b29-3db2-64964cd46a5b&psq=difination+of+mongoDB&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTW9uZ29EQg&ntb=1"
              target="_blank"
            >
              ReadMore
            </NavLink>
          }
        />

        <div></div>
      </article>
      <Footer />
    </>
  );
};
export default Service;
