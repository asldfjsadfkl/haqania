import React, { useEffect, useState } from "react";
import axios from "axios";
import server from "../../server";
import Footer from "../Layout/Footer/Footer";
import "./cmasayal.css";
import { useNavigate, useParams } from "react-router-dom";

const Cmasayal = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [msl, setMsl] = useState();
  useEffect(() => {
    async function got() {
      if (id !== "newmasla") {
        const { data } = await axios.get(`${server}/questions/${id}`);
        setMsl(data?.question);
      }
    }
    got();
  }, [id]);
  //////////
  // changing of contorlling data
  const handleChange = (e) => {
    setMsl({ ...msl, [e.target.name]: e.target.value });
  };
  const submitAnswer = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    try {
      const config = {
        headers: { Content: "application/json" },
        withCredentials: true,
      };

      await axios.post(`${server}/masayals/createmasayal`, data, config);
      navigate("/masayal");
      //   if (id != "newmasla") {
      //     const { data } = await axios.delete(`${server}/questions/${id}`);
      //   }
    } catch (error) {}
  };

  ///////// post answer of question
  return (
    <>
      <form action="POST" className="cmasayalform" onSubmit={submitAnswer}>
        <div className="inputsDiv-masayal">
          <section className="sectionOfcmasayal"> فتوی لکھیں</section>

          {/* <input type="text" name='question' value={msl?.question} placeholder='سوال' required className="inputs-cmasayal" /> */}

          <textarea
            type="text"
            name="question"
            value={msl?.question}
            placeholder="سوال"
            required
            className="inputs-cmasayal"
          />

          <textarea
            className="mazmonOfcmasayal"
            onChange={handleChange}
            name="answer"
            placeholder="جواب۔۔۔"
            required
          ></textarea>
          <div className="childOFcmasayalform">
            <button type="submit" className="cmasayalOfbutton">
              محفوظ کریں
            </button>
          </div>
        </div>
        <Footer />
      </form>
    </>
  );
};

export default Cmasayal;
