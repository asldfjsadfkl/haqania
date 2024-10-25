import React, { useEffect, useRef, useState } from "react";
import "./teachdash.css";
import moment from "moment";
import delet from "../../../../fonts/delet.png";
import axios from "axios";
import server from "../../../../server";
const TeachDash = (refreshout) => {
  const [message, setMessage] = useState("");
  const [listMessage, setLMessage] = useState();
  const [userMsg, setUserMsg] = useState();
  const [refreshs, setRefresh] = useState(false);
  const refOfOl = useRef();
  useEffect(() => {
    async function gots() {
      try {
        const { data } = await axios.get(`${server}/chat/get`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        setLMessage(data?.userChat);
        setUserMsg(data?.userId);
      } catch (error) {}
    }
    gots();
  }, [refreshout, refreshs]);

  const submitMessage = async (e) => {
    e.preventDefault();
    const formD = new FormData(e.currentTarget);
    const data = Object.fromEntries(formD);
    try {
      setRefresh(false);
      await axios.post(`${server}/chat/post`, data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setMessage("");
      setRefresh(true);
    } catch (error) {}
  };
  //// delete msg
  const deleteSubmit = async (id) => {
    try {
      setRefresh(false);
      await axios.delete(`${server}/chat/delete/${id}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setRefresh(true);
    } catch (error) {}
  };

  return (
    <div className="mainOf_teacherDash">
      <ol className="chatStore">
        {/* <div className="menu">
          <div className="back">
            <i className="fa fa-chevron-left"></i>
            <img src="https://i.imgur.com/DY6gND0.png" draggable="false" />
          </div>
          <div className="name">Alex</div>
          <div className="last">18:09</div>
        </div> */}

        {listMessage?.map((msg, index) => {
          return (
            <li
              key={index}
              className={msg?.userId === userMsg ? "self" : "other"}
            >
              <div className="avatar">
                <img
                  className="imgInChatuser"
                  src="https://i.imgur.com/HYcn9xO.png"
                  draggable="false" alt="img"
                />
              </div>
              <div className="msgInChat">
                <p className="nameinchat">{msg?.name}</p>
                <p className="textMsgChat">{msg?.message}</p>
                <img
                  className="deletimginchat"
                  src={delet}
                  onClick={(e) => deleteSubmit(msg?._id)}
                  alt=""
                />

                <time>
                  <span>
                    {moment.utc(msg?.date).local().format("HH:mm a DD-MM-YYYY")}
                  </span>
                </time>
              </div>
            </li>
          );
        })}
        <div ref={refOfOl}></div>
      </ol>
      <form className="buttonOfChat" onSubmit={submitMessage}>
        <input
          className="inputinChat"
          type="text"
          name="message"
          value={message}
          placeholder="میسج لکھیں"
          onChange={(e) => setMessage(e.target.value)}
          onMouseEnter={refOfOl?.current?.scrollIntoView({
            behavior: "smooth",
          })}
        />
        <button type="submit" className="sendbuttoninchat">
          send
        </button>
      </form>
    </div>
  );
};

export default TeachDash;
