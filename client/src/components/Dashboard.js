import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link
        to="/surveys/new"
        className="btn btn-primary btn-lg active"
        role="button"
        aria-pressed="true"
      >
        Add New Survey
      </Link>
    </div>
  );
};

export default Dashboard;
