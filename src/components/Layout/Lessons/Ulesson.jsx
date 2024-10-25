import React, { useEffect, useState } from "react";
import server from "../../../server";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Ulesson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    text: "",
  });

  // console.log(inputs);
  ///// getting one lesson for update lessons data
  useEffect(() => {
    async function got() {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      const { data } = await axios.get(`${server}/articles/${id}`, config);
      setInputs(data?.art);
    }
    got();
  }, [id]);

  /////////// delete one article
  /////////// delete one article
  const updateLesson = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);

    await axios.patch(`${server}/articles/${id}`, data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    navigate("/lessons");
  };

  // changing inputs data
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form action="PATCH" className="cLessonsform" onSubmit={updateLesson}>
        <div className="inputsDiv">
          <section className="sectionOfcLessons">مضمون کی تجدید کریں</section>

          <input
            type="text"
            name="name"
            placeholder="موضوع"
            onChange={handleChange}
            value={inputs.name}
            className="inputs-cLessons"
          />
          <textarea
            className="mazmonOfcLessons"
            name="text"
            onChange={handleChange}
            value={inputs.text}
            placeholder="مضمون۔۔۔"
          ></textarea>
          <div className="childOFcLessonsform">
            <button type="submit" className="cLessonsOfbutton">
              محفوظ کریں
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Ulesson;
