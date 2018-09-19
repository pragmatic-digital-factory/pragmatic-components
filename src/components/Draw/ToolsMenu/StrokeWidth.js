import React from "react";
import PropTypes from "prop-types";

const StrokeWidth = ({ setStrokeWidth, strokeWidth }) => {
  return (
    <select onChange={e => setStrokeWidth(e.target.value)} value={strokeWidth}>
      <option value="">Select a stroke</option>
      <option value={1}>1</option>
      <option value={3}>3</option>
      <option value={7}>7</option>
    </select>
  );
};

StrokeWidth.propTypes = {
  setStrokeWidth: PropTypes.func,
  strokeWidth: PropTypes.number,
};

export default StrokeWidth;
