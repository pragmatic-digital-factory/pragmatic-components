import React from "react";
import PropTypes from "prop-types";
import Shapes from "./Shapes";
import StrokeWidth from "./StrokeWidth";
import ColorPicker from "./ColorPicker";

const ToolsMenu = ({ color, strokeWidth, setColor, setDropZone, setStrokeWidth, setType, isMobile, type, undo }) => {
  return (
    <React.Fragment>
      <Shapes ismobile={isMobile} setType={setType} undo={undo} setDropZone={setDropZone} type={type} />
      <div className={"sub-menu"}>
        <ColorPicker setColor={setColor} color={color} />
        <div className={"color-set"} style={{ background: color }} />
        <StrokeWidth strokeWidth={strokeWidth} setStrokeWidth={setStrokeWidth} />
        <div className={"stroke-set"}>
          <svg height={strokeWidth} width="25" className={"custom-icon-svg"}>
            <line x1="0" y1="0" x2="16" y2="0" style={{ stroke: "#000000", strokeWidth }} />
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
};

ToolsMenu.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
  setColor: PropTypes.func,
  setDropZone: PropTypes.func,
  setStrokeWidth: PropTypes.func,
  setType: PropTypes.func,
  isMobile: PropTypes.bool,
  type: PropTypes.string,
  undo: PropTypes.func,
};

export default ToolsMenu;
