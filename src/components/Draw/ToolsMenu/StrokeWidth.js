import React from "react";
import PropTypes from "prop-types";
const StrokeWidth = ({ setStrokeWidth, strokeWidth }) => {
  return (
    <button>
      <svg height={strokeWidth} width="25" className={"custom-icon-svg"}>
        <line x1="0" y1="0" x2="16" y2="0" style={{ stroke: "#f27e20", strokeWidth }} />
      </svg>
    </button>
  );
};

StrokeWidth.propTypes = {
  strokeWidth: PropTypes.number,
  setStrokeWidth: PropTypes.func,
};

export default StrokeWidth;
