import React, { useEffect, useState } from "react";
import axios from "axios";
import server from "../../../server.js";
import Footer from "../Footer/Footer";
import "../../createMasayal/cmasayal.css";
import { useNavigate, useParams } from "react-router-dom";

const Umasayal = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    question: "",
    answer: "",
  });
  useEffect(() => {
    try {
      async function got() {
        const { data } = await axios.get(`${server}/masayals/${id}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        setData(data?.msl);
      }
      got();
    } catch (error) {}
  }, [id]);

  /////// submit patch data
  const callUpdateMasla = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    try {
      axios.patch(`${server}/masayals/updatemasla/${id}`, data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      navigate("/masayal");
    } catch (error) {}
  };

  return (
    <>
      <form action="POST" className="cmasayalform" onSubmit={callUpdateMasla}>
        <div className="inputsDiv-masayal">
          <section className="sectionOfcmasayal">تجدید کریں</section>

          <textarea
            type="text"
            name="question"
            placeholder="سوال"
            required
            value={data?.question}
            onChange={(e) => setData(e.target.value)}
            className="inputs-cmasayal"
          />

          <textarea
            className="mazmonOfcmasayal"
            name="answer"
            placeholder="جواب۔۔۔"
            required
            onChange={(e) => setData(e.target.value)}
            value={data?.answer}
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

export default Umasayal;
