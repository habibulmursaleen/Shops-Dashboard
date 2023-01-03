import React, { useState } from "react";
import Logo from "../assets/logoMain.png";
import { SideBarData } from "../Data/SideBarData";
import classes from "../styles/Sidebar.module.css";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div>
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
    </div>
  );
};

export default Sidebar;
