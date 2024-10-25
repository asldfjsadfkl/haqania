import React, { Fragment, useEffect, useState } from "react";
import TeachIcon from "../../../fonts/TeachIcon.png";
import Loader from "../Loader/Loader";
import server from "../../../server";
import "./Teacher.css";
import axios from "axios";
//////// diolog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

//////////////  main funtion of Teacher

const Teacher = () => {
  const [loading, setLoading] = useState(true);
  const [teacher, setTeacher] = useState();
  const [refresh, setRefresh] = useState(false);
  ///////////////// getting All teacher api for client side
  useEffect(() => {
    setLoading(true);
    async function got() {
      const { data } = await axios.get(`${server}/teacher/all`);
      setTeacher(data?.teachers);
    }
    got();
    setLoading(false);
  }, [refresh]);
  //////////////////// calling to delete api
  // const callDelTeach = async (id) => {
  //   await axios.delete(`${server}/teacher/${id}`);
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   window.location.reload();
  // };

  ///////////////// post teacher data
  const createNewTeacher = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    try {
      setRefresh(false);
      await axios.post(`${server}/teacher/teachercreate`, data);
      handleClose();
      setRefresh(true);
    } catch (error) {}
  };

  //////////////////
  //////////////////
  //////////////////
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  ////////// return jsx
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="bodyofTeacher">
            <div className="headerOfteachers">
              <div className="nameInst_inheader">
                اساتذہ جامعہ دارالعلوم اسلامیہ لورالائی
              </div>
              <div>
                <button className="newTeacheCreate" onClick={handleClickOpen}>
                  New
                </button>
              </div>
            </div>
            <div className="containerForProfileTeach">
              <div className="rowsOfProfile">
                {teacher?.map((teacher, index) => {
                  return (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="our_team_teacher">
                        <div className="picture">
                          <img className="img-fluid" src={TeachIcon} alt="img" />
                        </div>
                        <div className="team-content">
                          <h3 className="name nameOf_teachers">
                            نام:{teacher?.name}
                          </h3>
                          <h3 className="name nameOf_teachers">
                            والد:{teacher?.fName}
                          </h3>
                          <h4 className="title nameOf_teachers">
                            {teacher?.status}
                          </h4>
                          <h3 className="title nameOf_teachers">
                            فون:{teacher?.phone}
                          </h3>
                          <h4 className="title nameOf_teachers">
                            پتہ:{teacher?.address}
                          </h4>
                          <h3 className="title nameOf_teachers">
                            {teacher?.email}
                          </h3>
                          <h4 className="title nameOf_teachers">
                            {teacher?.address}، {teacher?.distract}
                          </h4>
                        </div>
                        <ul className="social">
                          <li>
                            <a
                              href="/"
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="fa fa-twitter"
                              aria-hidden="true"
                            ></a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            ></a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* /////////////// */}
            </div>
          </div>

          {/* {/* //////////////////  calling to box diolog */}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle className="formhead">
              داخلہ فارم برائے استاد
            </DialogTitle>
            <DialogContent>
              <form
                action="POST"
                onSubmit={createNewTeacher}
                className="formOfCreate"
              >
                <input
                  required
                  className="inputOfstudntcreate"
                  type="text"
                  name="name"
                  placeholder="نام"
                />
                <input
                  required
                  className="inputOfstudntcreate"
                  type="text"
                  name="fName"
                  placeholder="ولدیت"
                />
                <input
                  required
                  className="inputOfstudntcreate"
                  type="text"
                  name="status"
                  placeholder="منصب"
                />
                <input
                  required
                  className="inputOfstudntcreate"
                  type="text"
                  name="distract"
                  placeholder="ضلع"
                />
                <input
                  required
                  className="inputOfstudntcreate"
                  type="email"
                  name="email"
                  placeholder="ای میل"
                />
                <input
                  required
                  className="inputOfstudntcreate"
                  type="Number"
                  name="phone"
                  placeholder="فون"
                />
                <input
                  required
                  className="inputOfstudntcreate"
                  type="text"
                  name="address"
                  placeholder="ایڈریس"
                />
                <button type="submit" className="submitOfstudentCreate">
                  Submit
                </button>
              </form>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Teacher;
