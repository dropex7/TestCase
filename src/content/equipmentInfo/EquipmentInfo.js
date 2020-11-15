import React from "react";
import EquipmentCard from "./equipmentCard/EquipmentCard";
import EquipmentForm from "./equipmentForm/EquipmentForm";
import "./EquipmentInfo.css";

export default function EquipmentInfo() {
  return (
    <div className="Equipment_info">
      <EquipmentForm />
      <EquipmentCard />
    </div>
  );
}
