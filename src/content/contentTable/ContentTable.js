import React from "react";
import data from "./../../data.json";
import goodIcon from "../../assets/Icons/goodIcon.svg";
import badIcon from "../../assets/Icons/badIcon.svg";
import "./ContentTable.css";

export default function ContentTable() {
  const returnIconForSlope = (slope) => {
    if (slope > 95 && slope < 105) {
      return (
        <span>
          {slope}
          <span className="Content_table_logo">
            <img src={goodIcon} alt="" />
          </span>
        </span>
      );
    } else {
      return (
        <span>
          {slope}
          <span className="Content_table_logo">
            <img src={badIcon} alt="" />
          </span>
        </span>
      );
    }
  };
  const returnIconForOffset = (Offset) => {
    if (Offset > -20 && Offset < 20) {
      return (
        <span>
          {Offset}
          <span className="Content_table_logo">
            <img src={goodIcon} alt="" />
          </span>
        </span>
      );
    } else {
      return (
        <span>
          {Offset}
          <span className="Content_table_logo">
            <img src={badIcon} alt="" />
          </span>
        </span>
      );
    }
  };
  return (
    <div className="Content_table">
      <h2> Calibration report </h2>
      <table>
        <thead className="Content_table_names">
          <tr>
            <td> Data </td> <td> User buffer solution </td>
            <td>
              Slope, % <br /> Norm 95 - 105
            </td>
            <td>
              Offset, mV <br /> Norm±(0 - 20)
            </td>
            <td> User </td>
          </tr>
        </thead>
        <tbody>
          {data.map((dat) => (
            <tr>
              <th>
                <span className="Content_table_body_data">
                  {dat.data.day} <br /> {dat.data.time}
                </span>
              </th>
              <th>
                <span>
                  B1: {dat.UserBuffer[0].В1}: pH {dat.UserBuffer[0].pH} <br />
                  B2: {dat.UserBuffer[1].В2}: pH {dat.UserBuffer[1].pH} <br />
                  B3: {dat.UserBuffer[2].В3}: pH {dat.UserBuffer[2].pH} <br />
                  B4: {dat.UserBuffer[3].В4}: pH {dat.UserBuffer[3].pH} <br />
                  B5: {dat.UserBuffer[4].В5}: pH {dat.UserBuffer[4].pH}
                </span>
                <br />
              </th>
              <th> {returnIconForSlope(dat.Slope)} </th>
              <th> {returnIconForOffset(dat.Offset)} </th>
              <th className="Content_table_body_name"> {dat.name} </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
