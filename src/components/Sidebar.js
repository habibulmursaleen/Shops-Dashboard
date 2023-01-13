import React, { useState } from "react";
import Logo from "../assets/logoMain.png";
import { SideBarData } from "../Data/SideBarData";
import { UilBars } from "@iconscout/react-unicons";
import classes from "../styles/Sidebar.module.css";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpended] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }

  return (
    <div>
      <div className={classes.bars} style={expanded?{left: '60%'}:{left: '5%'}} 
      onClick={()=>setExpended(!expanded)}>
        <UilBars />
      </div>
      <motion.div className={classes.sidebar} 
      variants={sidebarVariants}
      animate={window.innerWidth<=768?`${expanded}`:''}
      >
      <div className={classes.Sidebar}>
        {/* logo */}
        <div className={classes.logo}>
          <img src={Logo} alt="" />
          <span style={{ color: "#351c75" }}>SHOPS</span>
        </div>

        {/* menu  */}
        <div className={classes.menu}>
          {SideBarData.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  selected === index
                    ? `${classes.menuItem} ${classes.active}`
                    : `${classes.menuItem}`
                }
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span> {item.heading} </span>
              </div>
            );
          })}
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
