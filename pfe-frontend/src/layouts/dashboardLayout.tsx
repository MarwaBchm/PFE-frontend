import React from "react";
import Sidebar from "../components/ui/Sidebar";
import Navbar from "../components/ui/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="flex-1 p-4 bg-blue-3">
          <Outlet /> {/* This renders the nested routes */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
