import React from "react";
import PropTypes from "prop-types";

const StrokeItem = ({ strokeWidth, setStrokeWidth }) => {
  return (
    <div className="item" onClick={() => setStrokeWidth(strokeWidth)}>
      <svg height={strokeWidth} width="25" className={"custom-icon-svg"}>
        <line x1="0" y1="0" x2="16" y2="0" style={{ stroke: "#f27e20", strokeWidth }} />
      </svg>
    </div>
  );
};

const StrokeWidth = ({ setStrokeWidth }) => {
  return (
    <div className="ui selection dropdown">
      <input type="hidden" name="strokeWidth" />
      <i className="dropdown icon" />
      <div className="default text">StrokeWidth</div>
      <div className="menu">
        <StrokeItem strokeWidth={1} setStrokeWidth={setStrokeWidth} />
        <StrokeItem strokeWidth={3} setStrokeWidth={setStrokeWidth} />
        <StrokeItem strokeWidth={5} setStrokeWidth={setStrokeWidth} />
      </div>
    </div>
  );
};

StrokeWidth.propTypes = {
  setStrokeWidth: PropTypes.func,
};

export default StrokeWidth;
