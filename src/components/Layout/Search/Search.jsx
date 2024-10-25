import React, { useState } from "react";
import axios from "axios";
import "./search.css";
import Sdata from "../SData/Sdata";
import server from "../../../server";

const Search = () => {
  const [input, setInput] = useState("");
  // const [searchs, setSearch] = useState("");

  const onChanged = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(input)
      await axios.get(`${server}/student/search/?search=${input}`, {
        withCredentials: true,
      });
      // setSearch(data);
    } catch (error) {}
  };

  return (
    <>
      <form className="divsearch" method="GET" onSubmit={handleSubmit}>
        <div className="divsearcChils">
          <input
            onChange={onChanged}
            className="search"
            type="search"
            placeholder="Search Something..."
          />
          <button className="sbutton" type="submit">
            Search
          </button>
        </div>
        <Sdata />
      </form>
    </>
  );
};

export default Search;
