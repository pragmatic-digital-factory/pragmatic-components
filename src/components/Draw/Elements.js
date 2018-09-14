import React from "react";
import PropTypes from "prop-types";
import { getElementComponent } from "./utils";

const Elements = ({ elements }) => {
  return elements.map((element, index) => {
    return getElementComponent(element, index);
  });
};

Elements.propTypes = {
  elements: PropTypes.array,
};

export default Elements;
