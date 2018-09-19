import React from "react";
import PropTypes from "prop-types";
import { Circle } from "react-konva";

const CircleDraw = ({
  x,
  y,
  width,
  height,
  stroke,
  strokeWidth,
  draggable,
  handleDragStart,
  handleDragEnd,
  name,
  onMouseOver,
  id,
}) => {
  let radius = width < 0 ? width * -1 : width;
  radius = height === 0 ? radius : Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
  return (
    <Circle
      x={x}
      y={y}
      radius={radius}
      stroke={stroke}
      strokeWidth={strokeWidth}
      draggable={draggable}
      name={name}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      id={id}
    />
  );
};

CircleDraw.propTypes = {
  draggable: PropTypes.bool,
  name: PropTypes.string,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  id: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default CircleDraw;
