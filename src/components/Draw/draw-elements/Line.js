import React from 'react';
import { Line } from 'react-konva';

export default props => {
  return (
    <Line
      {...props}
      points={[0, 0, props.currentVectorX, props.currentVectorY]}
      fill={props.stroke}
      draggable={props.draggable}
      name={props.name}
      onDragStart={props.handleDragStart}
      onDragEnd={props.handleDragEnd}
      id={props.id}
    />
  );
};
