import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import tabsData from "./Assets/tabs.json";

import Tabs from "./Views/Tabs";
const TabContent = lazy(() => import("./Views/TabContent"));

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
