import React from "react";
import { cardsData } from "../../Data/CardsData";
import classes from "../../styles/Cards.module.css";
import Card from "./Card/Card";

const Cards = () => {
  return (
    <div className={classes.cards}>
      {cardsData.map((card, index) => {
        return (
          <div key={index} className={classes.parentContainer}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
