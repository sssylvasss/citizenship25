import React from "react";

import { Food } from "./Styling";

export const SnakeFood = (props) => {
  return (
    <Food top={`${props.foodDot[0]}rem`} left={`${props.foodDot[1]}rem`} />
  );
};
