import React from 'react';
import Overview from './Overview';
import Updates from './Updates';
import classes from '../../styles/Review.module.css'

const Review = () => {
    return (
        <div className={classes.RightSide}>
      <div>
        <h3 style={{ color: "#0b5394"  }}>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3 style={{ color: "#0b5394", marginBottom: "4rem" }}>Overview</h3>
        <Overview />
      </div>
    </div>
    );
};

export default Review;