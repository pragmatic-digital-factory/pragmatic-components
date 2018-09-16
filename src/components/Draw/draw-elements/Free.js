import React from "react";
import { Line } from "react-konva";

export default ({
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
