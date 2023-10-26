import React from "react";
import tabsData from "../Assets/tabs.json";
import { NavLink } from "react-router-dom";

export default function Tabs() {
  return (
    <div>
      <ul>
        {tabsData
          .sort((a, b) => a.order - b.order)
          .map((tab) => (
            <li key={tab.id}>
              <NavLink to={`/${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}
