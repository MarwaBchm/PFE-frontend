import React from "react";
import Sidebar from "../components/ui/Sidebar";
import Navbar from "../components/ui/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="flex-1 p-2 pt-4 w-full h-full bg-blue-3">
          <div className="bg-white p-2 rounded-xl flex h- overflow-y-auto shadow-sm ">
            <Outlet /> {/* This renders the nested routes */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
