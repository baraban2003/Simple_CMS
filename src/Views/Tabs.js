import React from "react";
import tabsData from "../Assets/tabs.json";
import {
  NavLink,
  Routes,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";

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
