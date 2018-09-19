import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-konva";

const FreeDraw = ({
  startX,
  startY,
  cumulatedVector,
  stroke,
  strokeWidth,
  draggable,
  name,
  handleDragStart,
  handleDragEnd,
  onMouseOver,
  id,
}) => {
  return (
    <Line
      x={startX}
      y={startY}
      points={cumulatedVector}
      fill={stroke}
      stroke={stroke}
      strokeWidth={strokeWidth}
      draggable={draggable}
      name={name}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onMouseOver={onMouseOver}
      id={id}
    />
  );
};

FreeDraw.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  points: PropTypes.array,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  name: PropTypes.string,
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func,
  draggable: PropTypes.bool,
  id: PropTypes.string,
};

export default FreeDraw;
