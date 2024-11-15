import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardContent from "../components/DashboardContent";

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
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
