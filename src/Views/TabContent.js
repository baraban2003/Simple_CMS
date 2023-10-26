import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

import tabsData from "../Assets/tabs.json";

export default function TabContent() {
  const location = useLocation();
  let tabId = location.pathname;

  if (!tabId) {
    tabId = `/${tabsData[0].id}`;
  }

  tabId = tabId.substring(1);

  const tab = tabsData.find((t) => t.id === tabId);

  if (!tab) {
    // Handle the case when no matching tab is found
    return <div>Tab not found</div>;
  }

  const Content = lazy(() => import(`../${tab.path}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
  );
}
