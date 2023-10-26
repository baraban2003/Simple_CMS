import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Tabs from "./Views/Tabs";
import TabContent from "./Views/TabContent";

import tabsData from "./Assets/tabs.json";

function App() {
  return (
    <div>
      <Tabs />
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to={tabsData.find((tab) => tab.order === 0).id} replace />
          }
        />
        {tabsData.map((tab) => (
          <Route
            key={tab.id}
            path={`/${tab.id}`}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <TabContent tab={tab} />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
