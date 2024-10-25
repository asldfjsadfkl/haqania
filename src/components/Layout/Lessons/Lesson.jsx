import React, { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import moment from "moment";
import classNames from "classnames";
import server from "../../../server";
import "./lesson.css";
import axios from "axios";
import NodeLoader from "../Loader/NodeLoader";

const Lesson = () => {
  // pagination
  const [paginate, setPaginate] = useState();

  const [currentPage, setCurrentPage] = useState(1);

  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [lesson, setLesson] = useState();
  const [emptySearch, setEmptySearch] = useState();
  const [roles, setRoles] = useState();
  ///// getting all lessons data

  useEffect(() => {
    loaduser();
    async function gotdata() {
      const { data } = await axios.get(
        `${server}/articles/search/data?search=${input}&page=${currentPage}&limit=4`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setPaginate(data?.pagination);
      setLesson(data?.data);
      setEmptySearch(data?.data);
    }

    // timeLimmitngForsearchapi
    const loaderForApi = setTimeout(() => {
      gotdata();
    }, 1000);
    return () => clearTimeout(loaderForApi);

    async function loaduser() {
      try {
        const data = await axios.get(`${server}/getuser`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        setRoles(data?.data?.user?.role);
      } catch (error) {}
    }
  }, [input, currentPage]);

  /////////// delete one article
  const deleteArticle = async (id) => {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    await axios.delete(`${server}/articles/${id}`, config);
    window.location.reload();
  };
  // go to update layout of lesson
  const goToUpdate = (id) => {
    navigate(`/lesson/${id}`);
  };

  return (
    <div className="lessonoflesson">
      <div className="divfor-header-oflesson">
        <div className="headerFor-lesson">
          <NavLink
            to="/clessons"
            className={classNames(
              roles !== "admin" ? "nodisplayinlessons" : "lessonbutton"
            )}
          >
            نیا مضمون لکھیے
          </NavLink>
          <h1 className="h1forlesson">مضامین</h1>
          <form
            className="formFor-searchin"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="search"
              value={input}
              placeholder="تلاش کریں۔۔۔"
              onChange={(e) => setInput(e.target.value)}
              name="search"
              className="inputsearchin-IN-lesson"
            />
          </form>
        </div>
      </div>

      {!lesson ? (
        <NodeLoader />
      ) : (
        <main className="mainOflesson">
          {emptySearch === "" ? (
            <p style={{ fontSize: "1.4rem" }}>Not found</p>
          ) : (
            lesson?.map((lessn, index) => {
              return (
                <div className="article" key={index}>
                  <h4 className="unwan">
                    <span className="spanoftajded">
                      <button
                        onClick={() => goToUpdate(lessn._id)}
                        className={classNames(
                          roles !== "admin"
                            ? "nodisplayinlessons"
                            : "buttonoftajded"
                        )}
                      >
                        تجدید
                      </button>
                    </span>{" "}
                    {lessn.name}
                    <span className="spanoftahzeef">
                      <button
                        onClick={() => deleteArticle(lessn._id)}
                        className={classNames(
                          roles !== "admin"
                            ? "nodisplayinlessons"
                            : "buttonoftajzeef"
                        )}
                      >
                        حذف
                      </button>
                    </span>
                  </h4>
                  <p className="mazmon">
                    {lessn.text}{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {moment.utc(lessn?.data).format("MM/DD/YY")}
                    </span>
                  </p>
                </div>
              );
            })
          )}
        </main>
      )}

      {/* ///////// PAGINATION  */}
      <ResponsivePagination
        current={currentPage}
        total={paginate?.totalPages}
        onPageChange={(e) => setCurrentPage(e)}
      />

      <Footer />
    </div>
  );
};

export default Lesson;
