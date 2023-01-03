import { motion } from "framer-motion";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import classes from "../../../styles/Compacted.module.css";

const Compacted = ({ ...props }) => {
  const param = props.props;
  return (
    <motion.div
      className={classes.CompactCard}
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
      }}
      onClick={props.handleExpended}
      layoutId="expendableCard"
    >
      <div className={classes.radialBar}>
        <span>{param.title}</span>
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
          styles={{
            root: {
              width: "4rem",
              overflow: "visible",
            },
            path: {
              stroke: "white",
              "stroke-width": "12px",
              filter: "drop-shadow(2px 4px 6px white)",
            },
            trail: {
              display: "none",
            },
            text: {
              fill: "white",
            },
          }}
        />
      </div>
      <div className={classes.detail}>
        <param.png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
};

export default Compacted;
