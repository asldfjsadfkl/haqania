import React, { useState, useEffect, Fragment } from "react";
import server from "../../../server";
import axios from "axios";
import moment from "moment";
import mark from "../../../images/svg.png";
import "./question.css";
import Footer from "../../Layout/Footer/Footer";
import Loader from "../Loader/Loader";
import { useNavigate, NavLink } from "react-router-dom";
const Question = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    setLoading(true);
    async function got() {
      const { data } = await axios.get(`${server}/questions/all`);
      setQuestion(data?.questions);
      setLoading(false);
    }
    got();
  }, []);
  ////////// go to answer of question
  const callToanswer = (id) => {
    navigate(`/answer/${id}`);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <main className="mainOfquestion">
            <section className="one_question">
              <div className="side-menu">
                <h3>سوال پوچھیں</h3>
                <p>
                  اگر آپ کا مطلوبہ سوال موجود نہیں تو اپنا سوال پوچھنے کے لیے
                  نیچے کلک کریں، سوال بھیجنے کے بعد جواب کا انتظار کریں۔ سوالات
                  کی کثرت کی وجہ سے کبھی جواب دینے میں پندرہ بیس دن کا وقت بھی
                  لگ جاتا ہے۔
                </p>
                <NavLink
                  to="/ask"
                  title="سوال پوچھیں"
                  className="btn_for_sawal"
                >
                  سوال پوچھیں
                </NavLink>
              </div>
            </section>
            <section className="two_question">
              <div className="sawalat">
                <h4>وہ مسائل جن کے جوابات دینے ہیں</h4>
                <ul>
                  {question.map((ques, index) => {
                    return (
                      <li key={index}>
                        <span onClick={() => callToanswer(ques._id)}>
                          {ques.question}
                        </span>
                        <span style={{ marginRight: "20px", fontSize: "1rem" }}>
                          {moment.utc(ques?.date).format("MM/DD/YY")}
                        </span>
                        <img className="svg" src={mark} alt="img"/>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          </main>
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Question;
