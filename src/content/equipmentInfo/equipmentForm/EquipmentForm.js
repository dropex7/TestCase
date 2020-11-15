import React from "react";
import EquipmentImg from "../../../assets/scale.jpg";
import "./EquipmentForm.css";

export default function EquipmentForm() {
  return (
    <div className="Equipment_info_form">
      <div className="Equipment_info_name">
        <img src={EquipmentImg} alt="" className="Equipment_img" />
        <span>
          <b>
            Аналитические весы
            <br /> OHAUS Adventurer
            <br /> АХ324 (B715976163)
          </b>
        </span>
      </div>
      <div>
        <form action="">
          <div className="Equipment_info_form">
            <select className="Equipment_info_form_select" name="" id="">
              <option value="">Select period</option>
              <option value="1">1 month</option>
              <option value="2">2 month</option>
              <option value="3">3 month</option>
            </select>
          </div>
          <div className="Equipment_info_form_radio">
            <input
              type="radio"
              value="Calibration"
              name="Equipment_info_type"
              className="Equipment_info_form_radio_input_1"
            />
            Calibration <br />
            <input
              type="radio"
              value="Measuring"
              name="Equipment_info_type"
              className="Equipment_info_form_radio_input_2"
            />
            Measuring
            <br />
            <input
              type="radio"
              value="Using"
              name="Equipment_info_type"
              className="Equipment_info_form_radio_input"
            />
            Using
            <br />
          </div>
          <button className="Equipment_info_form_btn">Generate report</button>
        </form>
      </div>
    </div>
  );
}
