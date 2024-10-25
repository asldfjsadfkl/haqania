import React, { useEffect, useState } from "react";
import axios from "axios";
import server from "../../../../server.js";
import classNames from "classnames";
import "./mainDataIndash.css";
import StudDash from "../StudDash/StudDahs";
import TeachDash from "../TeachDash/TeachDash";
const DaruliftahDash = () => {
  const [student, setStudents] = useState([]);
  const [data, setData] = useState({
    studentF: "none",
    teacherF: "block",
    maliyatF: "none",
    nizamF: "none",
    hifzF: "none",
  });

  useEffect(() => {
    async function got() {
      try {
        const { data } = await axios.get(`${server}/dash/dashboarddata`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        setStudents(data?.data);
      } catch (error) {}
    }

    got();
    setData({ nizamF: "none", teacherF: "block", studentF: "none" });
  }, []);

  const callstd = () => {
    setData({ nizamF: "none", teacherF: "none", studentF: "block" });
  };

  const calltech = () => {
    setData({ nizamF: "none", teacherF: "block", studentF: "none" });
  };

  return (
    <>
      <main className="main_daruliftahdash">
        <div className="has_mainperent">
          <div className="menu_fordash">
            <ul className="lists_for_menu_dash">
              <li className="list" onClick={callstd}>
                طلبہ
              </li>

              <li className="list" onClick={calltech}>
                مکالمہ
              </li>

              <li className="list">شعبہ حفظ</li>
              <li className="list">شعبہ نظامت</li>
              <li className="list">شعبہ مالیات</li>
            </ul>
          </div>

          <div
            className={classNames(
              data.studentF === "none" ? "nodisplay" : "displayok"
            )}
          >
            <StudDash student={student} />
          </div>

          <div
            className={classNames(
              data.teacherF === "none" ? "nodisplay" : "displayok"
            )}
          >
            <TeachDash refresh={data?.teacherF} />
          </div>
        </div>
      </main>
    </>
  );
};

export default DaruliftahDash;
