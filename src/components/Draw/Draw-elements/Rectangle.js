import React from "react";
import { Rect } from "react-konva";

export default props => {
  console.log("props >>>", props);
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
