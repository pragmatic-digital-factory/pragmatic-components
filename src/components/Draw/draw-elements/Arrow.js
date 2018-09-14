import React from "react";
import { Arrow } from "react-konva";
import PropTypes from "prop-types";
const ArrowElement = props => {
  return (
    <Arrow
      {...props}
      points={[0, 0, props.currentVectorX, props.currentVectorY]}
      fill={props.stroke}
      pointerLength={20}
      draggable={props.draggable}
      name={props.name}
      onDragStart={props.handleDragStart}
      onDragEnd={props.handleDragEnd}
      id={props.id}
    />
  );
};

ArrowElement.propTypes = {
  points: PropTypes.array,
  fill: PropTypes.number,
  pointerLength: PropTypes.number,
  draggable: PropTypes.bool,
  name: PropTypes.string,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  id: PropTypes.string,
};

export default ArrowElement;
