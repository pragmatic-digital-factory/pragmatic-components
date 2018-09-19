import React from "react";
import PropTypes from "prop-types";

// const StrokeItem = ({ strokeWidth, setStrokeWidth }) => {
//   return (
//     {/*<div className="item" onClick={() => setStrokeWidth(strokeWidth)}>*/}
//       {/*<svg height={strokeWidth} width="25" className={"custom-icon-svg"}>*/}
//         {/*<line x1="0" y1="0" x2="16" y2="0" style={{ stroke: "#f27e20", strokeWidth }} />*/}
//       {/*</svg>*/}
//     {/*</div>*/}
//   );
// };

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
};

export default StrokeWidth;
