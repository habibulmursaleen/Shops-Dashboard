import { UilTimes } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import React from "react";
import Chart from "react-apexcharts";
import classes from "../../../styles/Expended.module.css";

const Expended = ({ ...props }) => {
  const options = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  const param = props.props;
  return (
    //motion component from framer motion for smooth transition
    <motion.div
      className={classes.ExpandedCard}
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expendableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={props.handleCompacked} />
      </div>
      <span>{param.title}</span>
      <div className={classes.chartContainer}>
        <Chart series={param.series} type="area" options={options.options} />
      </div>
      <span>Last 24 Hours </span>
    </motion.div>
  );
};

export default Expended;
