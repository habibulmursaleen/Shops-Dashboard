import React from 'react';
import classes from '../../styles/Updates.module.css'
import { UpdatesData } from '../../Data/UpdatesData';

const Updates = () => {
    return (
        <div className={classes.Updates}>
            {UpdatesData.map((update)=>{
                return(
                    <div className={classes.update}>
                        <img src={update.img} alt='image1' />
                        <div className={classes.notifications}>
                            <div style={{marginBottom: "0.5rem"}}>
                                <span>{update.name}</span>
                                <span> {update.notifications}</span>
                            </div>
                            <span>{update.time}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Updates;