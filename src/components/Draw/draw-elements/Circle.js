import React from 'react';
import { Circle } from 'react-konva';

export default ({
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
      onMouseOver={onMouseOver}
      id={id}
    />
  );
};
