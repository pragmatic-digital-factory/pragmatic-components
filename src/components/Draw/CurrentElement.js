import React from "react";
import { getElementComponent } from "./utils";
const CurrentElement = ({ currentElement, dragEvents, type }) => {
  return <React.Fragment>{getElementComponent(currentElement, 100, dragEvents, type)}</React.Fragment>;
};

export default CurrentElement;
