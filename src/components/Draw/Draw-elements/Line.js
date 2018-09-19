import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-konva";

const LineDraw = props => {
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

LineDraw.propTypes = {
  points: PropTypes.array,
  fill: PropTypes.string,
  name: PropTypes.string,
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func,
  draggable: PropTypes.bool,
  id: PropTypes.string,
};

export default LineDraw;
