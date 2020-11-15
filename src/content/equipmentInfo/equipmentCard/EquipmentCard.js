import React from "react";
import "./EquipmentCard.css";
export default function equipmentCard() {
  return (
    <div className="Equipment_info_card">
      <span className="Equipment_info_card_description">
        Тип оборудования:
        <span className="Equipment_info_card_description_info"> Весы;</span>
        <br />
        Статус:
        <span className="Equipment_info_card_description_info">
          Готов к работе
        </span>
        <br />
        Изготовитель:
        <span className="Equipment_info_card_description_info"> Ohaus</span>
        <br />
        Модель:
        <span className="Equipment_info_card_description_info"> AX-123</span>
        <br />
        Ответственное подразделение (ремонт):
        <span className="Equipment_info_card_description_info">
          Группа обслуживания лабораторного оборудования
        </span>
        <br />
        Эксплуатирующее подразделение:
        <span className="Equipment_info_card_description_info">
          Химико-аналитическая лаборатория 2.0
        </span>
        <br />
        МОЛ:
        <span className="Equipment_info_card_description_info">
          Иванов Иван Иванович
        </span>
        <br />
        Территория:
        <span className="Equipment_info_card_description_info">
          г. Санкт-Петербург (Нойдорф)
        </span>
        <br />
        Серийный номер:
        <span className="Equipment_info_card_description_info">
          {" "}
          B715976163
        </span>
        <br />
        GUID:
        <span className="Equipment_info_card_description_info_id">
          508b2a71-662e-4983-ae0c-3cb0c1cd21c5
        </span>
        <br />
        Bims ID:
        <span className="Equipment_info_card_description_info_id">
          49db8db1-585f-4b9e-bbf0-8a59698edc8b
        </span>
        <br />
        Tam:
        <span className="Equipment_info_card_description_info_id">
          А-001234
        </span>
      </span>
    </div>
  );
}
