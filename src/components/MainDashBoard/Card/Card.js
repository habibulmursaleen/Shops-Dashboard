import { AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import Compacted from "./Compacted";
import Expended from "./Expended";

const Card = ({ ...props }) => {
  const [expended, setExpened] = useState(false);
  // console.log(props);
  return (
    <AnimateSharedLayout>
      {expended ? (
        <Expended props={props} handleCompacked={() => setExpened(false)} />
      ) : (
        <Compacted props={props} handleExpended={() => setExpened(true)} />
      )}
    </AnimateSharedLayout>
  );
};

export default Card;
