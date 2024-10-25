import userIcon from "../../../images/userIcon.jpg";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import server from "../../../server";
////////comment code and pachages
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import "./student.css";
import NodeLoader from "../Loader/NodeLoader";
import { PdfFile } from "./PdfFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
////////MAIN FUNCTIONO

const Student = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [oneStdnt, setOneStdnt] = useState();
  const [pagination, setPaginattion] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    async function gotData() {
      const { data } = await axios.get(
        `${server}/student/all/search?search=${input}&page=${currentPage}&limit=15`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      setData(data?.allStudents);
      setPaginattion(data?.pagination);
    }
    const loaderSetTime = setTimeout(() => {
      gotData();
    }, 1000);
    return () => clearTimeout(loaderSetTime);
  }, [input, currentPage, refresh]);

  /////student create api /////////
  const handleCreate = async (e) => {
    e.preventDefault();
    const Form = new FormData(e.currentTarget);
    const data = Object.fromEntries(Form);
    console.log(data);
    try {
      setRefresh(false);
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      await axios.post(`${server}/student/studentcreate`, data, config);
      setOpen(false);
      setRefresh(true);
    } catch (error) {}
  };

  ///////////////// get one student by id/////
  const oneStudent = async (id) => {
    const student = await axios.get(`${server}/student/${id}`);
    setOneStdnt(student?.data?.student);
  };

  ///////////////// delete one student by id/////
  const deleteOneStdnt = async (id) => {
    try {
      if (id) {
        setRefresh(false);
        await axios.delete(`${server}/student/${id}`);
        // window.alert("data deleted");
        setRefresh(true);
      }
    } catch (error) {}
  };
  /////////////////
  const Update = (id) => {
    navigate(`/student/${id}`);
  };

  //////////////////
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="secNode first">
        <div className="first-header">
          <input
            type="search"
            onSubmit={(e) => e.preventDefault()}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="button"
            placeholder="تلاش کریں۔۔۔"
          />
          <button className="button" onClick={handleClickOpen}>
            نئے طالبعلم
          </button>
          <article>تعارف طلباء</article>
        </div>
        <hr />

        <div className="maindiv">
          {/* b///////////////box two */}
          <div className="dataofStudent">
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle className="formhead">
                داخلہ فارم برائے طلبہ
              </DialogTitle>
              <DialogContent>
                <form
                  action="POST"
                  onSubmit={handleCreate}
                  className="formOfstudentCreate"
                >
                  <input
                    required
                    maxLength="15"
                    className="inputOfstudntcreate"
                    name="admissionNumber"
                    type="number"
                    placeholder="داخلہ نمبر"
                  />

                  <input
                    required
                    className="inputOfstudntcreate"
                    type="text"
                    name="name"
                    placeholder=" نام طالبعلم بمع ولدیت"
                  />
                  <input
                    required
                    className="inputOfstudntcreate"
                    type="number"
                    name="cnicNumber"
                    placeholder="شناختی کارڈ نمبر"
                  />
                  <input
                    required
                    className="inputOfstudntcreate"
                    type="text"
                    name="guiderName"
                    placeholder="سرپرست کا نام بمع ولدیت"
                  />
                  <input
                    required
                    className="inputOfstudntcreate"
                    type="number"
                    name="gCnic"
                    placeholder="شناختی کارڈ نمبر"
                  />

                  <div className="divFor-select-and-classess">
                    <label
                      className="labelFor-newAndPreviosClass"
                      htmlFor="newClass"
                    >
                      مطلوبہ درجہ
                      <select
                        className="select-For-classess"
                        name="newClass"
                        id="newClass"
                      >
                        <option value="سال اول" className="option-ofstudent">
                          سال اول
                        </option>
                        <option value="سال دوئم" className="option-ofstudent">
                          سال دوئم
                        </option>
                        <option value="متوسطہ" className="option-ofstudent">
                          متوسطہ
                        </option>
                        <option value="اولی" className="option-ofstudent">
                          اولی
                        </option>
                        <option value="ثانیہ" className="option-ofstudent">
                          ثانیہ
                        </option>
                        <option value="ثالثہ" className="option-ofstudent">
                          ثالثہ
                        </option>
                        <option value="رابعہ" className="option-ofstudent">
                          رابعہ
                        </option>
                      </select>
                    </label>
                    <label
                      className="labelFor-newAndPreviosClass"
                      htmlFor="previosClass"
                    >
                      سابقہ درجہ
                      <select
                        className="select-For-classess"
                        name="previosClass"
                        id="previosClass"
                      >
                        <option value="سال اول" className="option-ofstudent">
                          سال اول
                        </option>
                        <option value="سال دوئم" className="option-ofstudent">
                          سال دوئم
                        </option>
                        <option value="متوسطہ" className="option-ofstudent">
                          متوسطہ
                        </option>
                        <option value="اولی" className="option-ofstudent">
                          اولی
                        </option>
                        <option
                          value="ثانویہ عامہ"
                          className="option-ofstudent"
                        >
                          ثانویہ عامہ
                        </option>
                        <option value="ثالثہ" className="option-ofstudent">
                          ثالثہ
                        </option>
                        <option value="رابعہ" className="option-ofstudent">
                          رابعہ
                        </option>
                      </select>
                    </label>
                  </div>

                  <input
                    required
                    className="inputOfstudntcreate"
                    type="number"
                    name="phone"
                    placeholder="موبائل نمبر"
                  />
                  <input
                    required
                    className="inputOfstudntcreate"
                    type="text"
                    name="situation"
                    placeholder="کیفیت"
                  />
                  <button type="submit" className="submitOfstudentCreate">
                    محفوظ کریں
                  </button>
                </form>
              </DialogContent>
            </Dialog>

            {/* {!data ? <NodeLoader /> : <p>asdfasd;flkajsd;flkasj;dflk</p>} */}
            <div className="dataOFstudentsinit">
              {!data[0]?.name ? (
                <NodeLoader />
              ) : (
                <ul className="dataFORstudentsandlists">
                  {data.map((student, index) => {
                    return (
                      <li key={index} className="listsofstudentsdata">
                        <NavLink
                          className="listsStudents"
                          onClick={() => oneStudent(student._id)}
                        >
                          <span>{student.admissionNumber},---</span>
                          <span>{student.name},---</span>
                          <span>{student.guiderName},---</span>
                          <span>{student.previosClass},---</span>
                          <span>{student.newClass},---</span>
                          <span>{student.situation},---</span>
                        </NavLink>
                      </li>
                    );
                  })}
                  <ResponsivePagination
                    total={pagination?.totalPages}
                    onPageChange={(e) => setCurrentPage(e)}
                    current={currentPage}
                  />
                </ul>
              )}
            </div>
          </div>

          {/* ////////////////////// box two */}
          <div className="profileperson">
            <div className="imgdiv">
              <img src={userIcon} alt="icon"/>
            </div>

            <ul>
              <li>
                داخلہ نمبر:
                <span className="spanuser1">
                  {" "}
                  {oneStdnt?.admissionNumber
                    ? oneStdnt?.admissionNumber
                    : "3453"}{" "}
                </span>
              </li>
              <li>
                نام طالبعلم بمع ولدیت:
                <span className="spanuser1">
                  {" "}
                  {oneStdnt?.name ? oneStdnt?.name : "امجد بن احمد اللہ"}
                </span>
              </li>
              <li>
                شناختی کارڈ نمبر:{" "}
                <span className="spanuser1">
                  {oneStdnt?.cnicNumber
                    ? oneStdnt?.cnicNumber
                    : "23523452345235234"}
                </span>
              </li>
              <li>
                سرپرست کا نام بمع ولدیت:
                <span className="spanuser1">
                  {oneStdnt?.guiderName
                    ? oneStdnt?.guiderName
                    : "احمداللہ بن سلیم اللہ"}
                </span>
              </li>
              <li>
                شناختی کارڈ نمبر:{" "}
                <span className="spanuser1">
                  {oneStdnt?.gCnic ? oneStdnt?.gCnic : "23452345234523"}
                </span>
              </li>
              <li>
                سابقہ درجہ:{" "}
                <span className="spanuser1">
                  {oneStdnt?.previosClass ? oneStdnt?.previosClass : "ثانیہ"}
                </span>
              </li>
              <li>
                مطلوبہ درجہ:{" "}
                <span className="spanuser1">
                  {oneStdnt?.newClass ? oneStdnt?.newClass : "ثالثہ"}
                </span>
              </li>
              <li>
                موبائل نمبر:{" "}
                <span className="spanuser1">
                  {oneStdnt?.phone ? oneStdnt?.phone : "2345345234523452"}
                </span>
              </li>
              <li>
                کیفیت :
                <span className="spanuser1">
                  {oneStdnt?.situation ? oneStdnt?.situation : "جید جدا"}
                </span>
              </li>
            </ul>

            <div className="buttonsOfstudent">
              <button
                className="deleteStudent"
                onClick={() => deleteOneStdnt(oneStdnt?._id)}
              >
                Delete
              </button>

              {/* <PdfFile data={oneStdnt} /> */}
              <PDFDownloadLink
                document={<PdfFile data={oneStdnt} />}
                style={{ color: "yello" }}
                fileName={"form.pdf"}
              >
                {({ blob, url, loading, error }) =>
                  loading ? (
                    "Report loading..."
                  ) : (
                    <button className="deleteStudent">Download</button>
                  )
                }
              </PDFDownloadLink>

              <button
                className="editStudent"
                onClick={() => Update(oneStdnt ? oneStdnt._id : "")}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Student;
