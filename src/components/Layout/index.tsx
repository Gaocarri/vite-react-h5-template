import TabBar from "./TabBar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import "./index.less";

const Layout = () => {
  return (
    <div className="app-layout">
      <main className="app-container">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <nav className="app-tab-bar">
        <TabBar />
      </nav>
    </div>
  );
};

export default Layout;
