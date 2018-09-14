import React, { Component } from 'react';
import { Text } from 'react-konva';

class TextDrawing extends Component {
  render() {
    const {
      x,
      y,
      width,
      height,
      padding,
      align,
      text,
      fill,
      fontFamily,
      draggable,
      name,
      handleDragStart,
      handleDragEnd,
      onMouseOver,
      id,
      fontSize,
    } = this.props;
    return (
      <Text
        className="test-text"
        x={x}
        y={y}
        width={width}
        height={height}
        padding={padding}
        fontFamily={fontFamily}
        align={align}
        fill={fill}
        text={text}
        draggable={draggable}
        name={name}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onMouseOver={onMouseOver}
        id={id}
        fontSize={fontSize}
      />
    );
  }
}

export default TextDrawing;
