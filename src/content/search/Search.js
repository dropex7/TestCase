import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <label className="Search_label">
        Enter inventory number, guid or bims id
      </label>
      <br />
      <input className="Search_input" type="text"></input>
      <button className="Search_btn">Search</button>
    </div>
  );
}
