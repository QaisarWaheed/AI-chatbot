import { Outlet } from "react-router";
import "./DashboardLayout.css";
import SideBar from "../components/input/SideBar";
import TopBar from "../components/input/TopBar";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <div className="header">
        <TopBar />
      </div>
      <div className="sider">
        <SideBar />
      </div>
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
