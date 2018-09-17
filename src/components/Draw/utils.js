import React from "react";
import RectangleDrawing from "./Draw-elements/Rectangle";
import CircleDrawing from "./Draw-elements/Circle";
import ArrowDrawing from "./Draw-elements/Arrow";
import LineDrawing from "./Draw-elements/Line";
import FreeDrawing from "./Draw-elements/Free";
import TextDrawing from "./Draw-elements/Text";
import { DrawElements } from "../../constants";

export const getElementComponent = (element, index, dragEvents, type) => {
  switch (element.type) {
    case DrawElements.RECTANGLE:
      return (
        <RectangleDrawing
          key={`rectangle-${index}`}
          x={element.startX}
          y={element.startY}
          width={element.width}
          height={element.height}
          stroke={element.color}
          strokeWidth={element.strokeWidth}
          draggable={type === null}
          name={element.id}
          handleDragStart={dragEvents.handleDragStart}
          handleDragEnd={dragEvents.handleDragEnd}
          id={element.id}
        />
      );
    case DrawElements.CIRCLE:
      return (
        <CircleDrawing
          key={`circle-${index}`}
          x={element.startX}
          y={element.startY}
          width={element.width}
          height={element.height}
          stroke={element.color}
          strokeWidth={element.strokeWidth}
          draggable={type === null}
          name={element.id}
          handleDragStart={dragEvents.handleDragStart}
          handleDragEnd={dragEvents.handleDragEnd}
          id={element.id}
        />
      );
    case DrawElements.ARROW:
      return (
        <ArrowDrawing
          key={`arrow-${index}`}
          x={element.startX}
          y={element.startY}
          currentVectorX={element.currentVectorX}
          currentVectorY={element.currentVectorY}
          stroke={element.color}
          strokeWidth={element.strokeWidth}
          draggable={type === null}
          name={element.id}
          handleDragStart={dragEvents.handleDragStart}
          handleDragEnd={dragEvents.handleDragEnd}
          id={element.id}
        />
      );
    case DrawElements.LINE:
      return (
        <LineDrawing
          key={`element-${index}`}
          x={element.startX}
          y={element.startY}
          currentVectorX={element.currentVectorX}
          currentVectorY={element.currentVectorY}
          stroke={element.color}
          strokeWidth={element.strokeWidth}
          draggable={type === null}
          name={element.id}
          handleDragStart={dragEvents.handleDragStart}
          handleDragEnd={dragEvents.handleDragEnd}
          id={element.id}
        />
      );
    case DrawElements.FREE_DRAWING:
      return (
        <FreeDrawing
          key={`element-${index}`}
          startX={element.startX}
          startY={element.startY}
          cumulatedVector={element.cumulatedVector}
          stroke={element.color}
          strokeWidth={element.strokeWidth}
          draggable={type === null}
          name={element.id}
          handleDragStart={dragEvents.handleDragStart}
          handleDragEnd={dragEvents.handleDragEnd}
          id={element.id}
        />
      );
    case DrawElements.TEXT_BOX:
      return (
        <TextDrawing
          key={`element-${index}`}
          x={element.startX}
          y={element.startY}
          widthWrapper={element.width}
          heightWrapper={element.height}
          text={element.text}
          fill={element.color}
          fontFamily={"OpenSans"}
          draggable={type === null}
          name={element.id}
          handleDragStart={dragEvents.handleDragStart}
          handleDragEnd={dragEvents.handleDragEnd}
          id={element.id}
          fontSize={element.fontSize}
        />
      );
    default:
      return null;
  }
};

export const noop = noop => noop;

export const encodedImage = url =>
  fetch(url)
    .then(response => response.blob())
    .then(
      blob =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );

export const unique_id = token => `${Date.now()}-${token}`;
