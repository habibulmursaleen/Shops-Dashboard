import React from "react";
import classes from "../../styles/MainDash.module.css";
import Cards from "./Cards";
import DataTable from "./Table/DataTable";

const MainDashBoard = () => {
  return (
    <div className={classes.MainDash}>
      <h1 style={{ color: "#0b5394" }}>Dashboard</h1>
      <Cards />
      <DataTable />
    </div>
  );
};

export default MainDashBoard;
