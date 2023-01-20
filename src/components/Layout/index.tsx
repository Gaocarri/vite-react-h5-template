import TabBar from "./TabBar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import "./index.less";

const Fallback = () => {
  return <div>加载中...</div>;
};

const Layout = () => {
  return (
    <div className="app-layout">
      <main className="app-container">
        <Suspense fallback={<Fallback />}>
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
