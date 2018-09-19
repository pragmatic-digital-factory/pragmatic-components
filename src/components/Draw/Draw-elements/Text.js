import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-konva";

class TextDraw extends Component {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    padding: PropTypes.number,
    align: PropTypes.string,
    text: PropTypes.string,
    fill: PropTypes.string,
    fontFamily: PropTypes.string,
    draggable: PropTypes.bool,
    name: PropTypes.string,
    handleDragStart: PropTypes.func,
    handleDragEnd: PropTypes.func,
    id: PropTypes.string,
    fontSize: PropTypes.number,
  };

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
        id={id}
        fontSize={fontSize}
      />
    );
  }
}

export default TextDraw;
