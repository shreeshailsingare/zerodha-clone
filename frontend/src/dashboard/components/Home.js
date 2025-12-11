import React from "react";
import "../index.css";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <div className="dashboard-root">
      <TopBar />
      <Dashboard />
    </div>
  );
};

export default Home;