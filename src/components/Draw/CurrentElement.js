import React from "react";
import PropTypes from "prop-types";
import { getElementComponent } from "./utils";
const CurrentElement = ({ currentElement, dragEvents, type }) => {
  return <React.Fragment>{getElementComponent(currentElement, 100, dragEvents, type)}</React.Fragment>;
};

CurrentElement.propTypes = {
  currentElement: PropTypes.object,
  dragEvents: PropTypes.shape({
    onDragStart: PropTypes.func,
    onDragEnd: PropTypes.func,
  }),
  type: PropTypes.string,
};
export default CurrentElement;
