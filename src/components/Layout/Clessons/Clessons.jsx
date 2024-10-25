import React from "react";
import axios from "axios";
import server from "../../../server";
import "./clessons.css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const Clessons = () => {
  const navigate = useNavigate();

  const submitFormLesson = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    await axios.post(`${server}/articles/createarticle`, data, config);
    navigate("/lessons");
  };

  return (
    <>
      <form action="POST" className="cLessonsform" onSubmit={submitFormLesson}>
        <div className="inputsDiv">
          <section className="sectionOfcLessons">مضمون لکھیں</section>

          <input
            type="text"
            name="name"
            placeholder="موضوع"
            className="inputs-cLessons"
          />
          <textarea
            className="mazmonOfcLessons"
            name="text"
            placeholder="مضمون لکھہے۔۔۔"
            id=""
          ></textarea>
          <div className="childOFcLessonsform">
            <button type="submit" className="cLessonsOfbutton">
              محفوظ کریں
            </button>
          </div>
        </div>
        <Footer />
      </form>
    </>
  );
};

export default Clessons;
