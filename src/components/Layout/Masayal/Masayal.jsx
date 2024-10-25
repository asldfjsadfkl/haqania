import React, { Fragment, useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import server from "../../../server";
import Footer from "../Footer/Footer";
import "./masayal.css";
import NodeLoader from "../Loader/NodeLoader";
const Masayal = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [paginate, setPaginate] = useState();
  const [input, setInput] = useState("");
  const [role, setRoles] = useState("");
  const [masayal, setMasayal] = useState([]);

  useEffect(() => {
    async function gotData() {
      try {
        const { data } = await axios.get(
          `${server}/masayals/all/search?search=${input}&page=${currentPage}&limit=4`
        );

        setPaginate(data?.pagination);
        setMasayal(data?.masayals);

        const user = await axios.get(`${server}/getuser`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log(user);
        setRoles(user?.data?.user?.role);
      } catch (error) {}
    }
    const loaderTime = setTimeout(() => {
      gotData();
    }, 800);
    return () => clearTimeout(loaderTime);
  }, [input, currentPage, role]);
  // /delete masla one from database
  const callDelete = async (id) => {
    try {
      axios.delete(`${server}/masayals/deleteone/${id}`, {
        headers: { "Content-type": "application/json" },
        withCredentials: true,
      });
    } catch (error) {}
  };
  //////////call to update and go to it
  const goToupdate = (id) => {
    navigate(`updatemasla/${id}`);
  };
  return (
    <div className="mainofmain-masayal">
      <div className="headerOf-masayal">
        <h1 className="h2oflesson">سوالات کےجوابات</h1>
        <NavLink
          className={
            role !== "admin" || role === undefined ? "nodispaly" : "nayamasla"
          }
          to="/answer/newmasla"
        >
          فتوی شیئر کریں
        </NavLink>
        <input
          type="search"
          value={input}
          onSubmit={(e) => e.preventDefault()}
          onChange={(e) => setInput(e.target.value)}
          className="searhEngin-input-masayal"
          placeholder="اپناسوال تلاش کرِیں"
        />
      </div>

      {!masayal[0]?.question ? (
        <NodeLoader />
      ) : (
        <main className="mainOfmasayal">
          {masayal.map((masla, index) => {
            return (
              <>
                <div className={{ "margin-top": "30px" }}></div>
                <div className="question" key={index}>
                  <label className="labelofmasayal1" htmlFor="question">
                    <button
                      className={
                        role !== "admin" || role === undefined
                          ? "nodispaly"
                          : "maslaupdate"
                      }
                      onClick={() => goToupdate(masla._id)}
                    >
                      تجدید
                    </button>
                    <button
                      className={
                        role !== "admin" || role === undefined
                          ? "nodispaly"
                          : "maslaupdate"
                      }
                      onClick={() => callDelete(masla._id)}
                    >
                      حذف
                    </button>
                    <span className="masla">{index} :سوال نمبر</span>
                  </label>
                  <p id="question">
                    <span className="masla">{masla.question}</span>
                  </p>
                </div>
                {/* answer of question */}
                <div className="answer">
                  <label className="labelofmasayal1answer" htmlFor="answer">
                    <span className="masla"> :جواب </span>
                  </label>
                  <p id="answer">
                    {masla.answer}
                    <span style={{ marginRight: "20px", fontSize: "1rem" }}>
                      تاریخ:{moment.utc(masla?.date).format("MM/DD/YY")}
                    </span>
                  </p>
                </div>
              </>
            );
          })}
          <div>
            {/* ///////// PAGINATION  */}
            <ResponsivePagination
              current={currentPage}
              total={paginate?.totalPages}
              onPageChange={(e) => setCurrentPage(e)}
            />
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
};

export default Masayal;
