import React, { useState, useEffect, Fragment } from "react";
import server from "../../../server";
import axios from "axios";
import moment from "moment";
// import mark from "../../../images/svg.png";
import "./Quetoanswer.css";
import Footer from "../../Layout/Footer/Footer";
import Loader from "../Loader/Loader";
import { useNavigate, NavLink } from "react-router-dom";
const QueToanswer = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    setLoading(true);
    async function got() {
      const input = "";
      const { data } = await axios.get(
        `${server}/masayals/all/search?search=${input}&page=1&limit=1000`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setQuestion(data?.masayals);
      setLoading(false);
      console.log(data?.masayals);
    }
    got();
  }, []);
  ////////// go to answer of question
  const callToanswer = (id) => {
    // console.log(id);
    navigate(`/masayal`);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <main className="mainOF_quetoanswer">
            <section className="two_quetoanswer">
              <div className="sawalat_quetoanswer">
                <h4>سوالات</h4>
                <ul>
                  {question?.map((ques, index) => {
                    return (
                      <li key={index}>
                        <span onClick={() => callToanswer(ques.question)}>
                          {ques.question}
                        </span>
                        <span style={{ marginRight: "20px", fontSize: "1rem" }}>
                          {moment.utc(ques?.date).format("MM/DD/YY")}
                        </span>
                        {/* <img className="svg" src={mark} /> */}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
            {/* // sectin two  */}
            <section className="sectiontwoFor_buttonquetoanswer">
              <NavLink to="/ask" className="div1">
                سوال بھیجیں
              </NavLink>
              <div className="div2">
                معزز قارئین اپنے سوالات بھیجنے کیلئے بٹن پر کلک کریں اور جواب کا
                انتظار کریں جواب آپ کو بھیج دی جائیگی
              </div>
              <NavLink to="/ask" className="div3">
                سوال بھیجیں
              </NavLink>
            </section>
          </main>
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default QueToanswer;
