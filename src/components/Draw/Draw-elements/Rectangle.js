import React from "react";
import PropTypes from "prop-types";
import { Rect } from "react-konva";

const RectangleDraw = props => {
  return (
    <Rect
      {...props}
      draggable={props.draggable}
      name={props.name}
      onDragStart={props.handleDragStart}
      onDragEnd={props.handleDragEnd}
      id={props.id}
    />
  );
};

RectangleDraw.propTypes = {
  name: PropTypes.string,
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func,
  draggable: PropTypes.bool,
  id: PropTypes.string,
};

export default RectangleDraw;
