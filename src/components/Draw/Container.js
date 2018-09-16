import React from "react";
import { findIndex, propEq } from "ramda";
import MobileDetect from "mobile-detect";
import { DrawElements } from "../../constants";
import CanvasZone from "./CanvasZone";
import CurrentElement from "./CurrentElement";
import Elements from "./Elements";
import Background from "./Background";
import Shapes from "./ToolsMenu/Shapes";
import ColorPicker from "./ToolsMenu/ColorPicker";
import StrokeWidth from "./ToolsMenu/StrokeWidth";
import "./styles.css";

export class DrawContainer extends React.Component {
  state = {
    drawZone: null,
    drawModal: false,
    actionBar: false,
    isDrawing: false,
    type: null,
    currentElement: {},
    elements: [],
    colorPickerOpen: false,
    color: "#000000",
    strokeWidth: 3,
    strokeWidthOpen: false,
    schemaName: "",
    loading: false,
    photoEdit: false,
    imgBackgroundUrl: null,
    imgBackground: null,
    offset: null,
    fontSize: 14,
    isMobile: new MobileDetect(window.navigator.userAgent).mobile(),
  };

  initCurrentElement(startX, startY) {
    const { type, color, strokeWidth, fontSize } = this.state;
    if (type !== null) {
      const unique_id = `${Date.now()}-${type}`;
      const currentElement = {
        id: unique_id,
        type: type,
        color: color,
        startX,
        startY,
        currentX: startX,
        currentY: startY,
        currentVectorX: 0,
        currentVectorY: 0,
        cumulatedVector: [0, 0],
        width: 0,
        height: 0,
        draggable: true,
        strokeWidth: strokeWidth,
        fontSize: fontSize,
      };
      this.setState(state => {
        return { ...state, currentElement, isDrawing: true };
      });
    }
    // this.currentElement = this.elements[unique_id]
  }

  setCurrentElement(currentX, currentY) {
    const { isDrawing, type, currentElement } = this.state;
    if (isDrawing && type !== DrawElements.TEXT_AREA) {
      const width = currentX - currentElement.startX;
      const height = currentY - currentElement.startY;
      const currentVectorX = currentElement.currentVectorX + (currentX - currentElement.currentX);
      const currentVectorY = currentElement.currentVectorY + (currentY - currentElement.currentY);
      this.setState(state => {
        return {
          ...state,
          currentElement: {
            ...state.currentElement,
            currentX,
            currentY,
            currentVectorX,
            currentVectorY,
            cumulatedVector: [...currentElement.cumulatedVector, currentVectorX, currentVectorY],
            width,
            height,
          },
        };
      });
    }
  }

  setElements(currentElement, textBox) {
    const { isDrawing, type } = this.state;
    if ((isDrawing && type !== DrawElements.TEXT_AREA) || (isDrawing && textBox)) {
      this.setState(state => {
        return {
          ...state,
          type: null,
          elements: [...state.elements, currentElement],
          isDrawing: false,
          currentElement: {},
        };
      });
    }
  }

  setOffset(offset) {
    this.setState(state => {
      return {
        ...state,
        offset,
      };
    });
  }

  setTextBox(text) {
    const { currentElement, fontSize } = this.state;
    const textBoxElement = {
      ...currentElement,
      type: DrawElements.TEXT_BOX,
      startX: currentElement.startX,
      startY: currentElement.startY,
      text,
      fontSize: fontSize,
    };
    this.setElements(textBoxElement, true);
  }

  setFontSize(fontSize) {
    this.setState(state => {
      return { ...state, fontSize };
    });
  }

  setCloseTextArea() {
    this.setState(state => {
      return { ...state, type: null, isDrawing: false, currentElement: {} };
    });
  }

  setDraggedElement(draggedElementIndex, endX, endY) {
    if (draggedElementIndex !== -1) {
      const { elements, offset } = this.state;
      let el = elements[draggedElementIndex];
      const offsetX = offset.startX - endX;
      const offsetY = offset.startY - endY;
      el = { ...el, startX: el.startX - offsetX, startY: el.startY - offsetY };
      this.setState(state => {
        return {
          ...state,
          elements: Object.assign([...state.elements], { [draggedElementIndex]: el }),
          offset: null,
        };
      });
    }
  }

  setInitDrawZone(rect) {
    this.setState(state => {
      return { ...state, drawZone: rect };
    });
  }

  setColor(color) {
    this.setState(state => {
      return { ...state, color };
    });
  }

  setType(type) {
    this.setState(state => {
      return { ...state, type };
    });
    //this.type = this.type === type ? null : type;
  }

  undo() {
    if (!!this.state.elements.length) {
      this.setState(state => {
        const els = [...state.elements];
        els.splice(-1);
        return {
          ...state,
          elements: els,
        };
      });
    }
  }

  setStrokeWidth(strokeWidth) {
    this.setState(state => {
      return { ...state, strokeWidth };
    });
  }

  handleTouchStart = e => {
    this.initCurrentElement(e.currentTarget.pointerPos.x, e.currentTarget.pointerPos.y);
  };

  handleTouchMove = e => {
    this.setCurrentElement(e.currentTarget.pointerPos.x, e.currentTarget.pointerPos.y);
  };

  handleTouchEnd = e => {
    this.setElements(this.state.currentElement);
  };

  handleMouseDown = e => {
    if (!this.state.isDrawing) this.initCurrentElement(e.evt.offsetX, e.evt.offsetY);
  };

  handleMouseMove = e => {
    this.setCurrentElement(e.evt.offsetX, e.evt.offsetY);
  };

  handleMouseUp = e => {
    this.setElements(this.state.currentElement);
  };

  handleDragStart(e) {
    console.log("on y passe bingo >>>");
    this.setOffset({ startX: e.evt.offsetX, startY: e.evt.offsetY });
  }

  handleDragEnd(e) {
    console.log("on y passe binga >>>");
    const draggedElementIndex = findIndex(propEq("id", e.target.attrs.id))(this.state.elements);
    this.setDraggedElement(draggedElementIndex, e.evt.offsetX, e.evt.offsetY);
  }

  render() {
    const { currentElement, drawZone, elements, isDrawing, fontSize, isMobile, strokeWidth, type } = this.state;
    console.log("my State >>>", this.state);
    return (
      <React.Fragment>
        <Shapes ismobile={isMobile} setType={this.setType.bind(this)} undo={this.undo.bind(this)} />
        <div className={"sub-menu"}>
          <ColorPicker setColor={this.setColor.bind(this)} />
          <StrokeWidth strokeWidth={strokeWidth} setStrokeWidth={this.setStrokeWidth.bind(this)} />
        </div>
        <CanvasZone
          drawZone={drawZone}
          eventsHandler={{
            handleTouchStart: this.handleTouchStart,
            handleTouchMove: this.handleTouchMove,
            handleTouchEnd: this.handleTouchEnd,
            handleMouseDown: this.handleMouseDown,
            handleMouseMove: this.handleMouseMove,
            handleMouseUp: this.handleMouseUp,
          }}
          currentElement={currentElement}
          type={type}
          isDrawing={isDrawing}
          isMobile={isMobile}
          fontSize={fontSize}
          setInitDrawZone={this.setInitDrawZone.bind(this)}
          setTextBox={this.setTextBox.bind(this)}
          setFontSize={this.setFontSize.bind(this)}
          setCloseTextArea={this.setCloseTextArea.bind(this)}
        >
          {/*<Background />*/}
          {isDrawing && (
            <CurrentElement
              currentElement={currentElement}
              dragEvents={{
                handleDragStart: this.handleDragStart.bind(this),
                handleDragEnd: this.handleDragEnd.bind(this),
              }}
              type={type}
            />
          )}
          <Elements
            elements={elements}
            dragEvents={{
              handleDragStart: this.handleDragStart.bind(this),
              handleDragEnd: this.handleDragEnd.bind(this),
            }}
            type={type}
          />
        </CanvasZone>
      </React.Fragment>
    );
  }
}
