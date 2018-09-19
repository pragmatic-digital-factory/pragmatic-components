import React from "react";
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

export default ToolsMenu;
