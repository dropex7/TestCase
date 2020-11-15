import React from "react";
import Search from "./search/Search";
import "./Content.css";
import EquipmentInfo from "./equipmentInfo/EquipmentInfo";
import ContentTable from "./contentTable/ContentTable";

export default function Content() {
  return (
    <section className="Content">
      <Search />
      <EquipmentInfo />
      <ContentTable />
    </section>
  );
}
