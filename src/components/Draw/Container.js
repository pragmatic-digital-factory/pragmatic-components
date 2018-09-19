import React from "react";
import { findIndex, propEq } from "ramda";
import MobileDetect from "mobile-detect";
import { DrawElements } from "../../constants";
import CanvasZone from "./CanvasZone";
import CurrentElement from "./CurrentElement";
import Elements from "./Elements";
import Background from "./Background";
import ToolsMenu from "./ToolsMenu";
import DropItem from "./Dropzone";
import { encodedImage, unique_id } from "./utils";
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
    imgBackground: null,
    offset: null,
    fontSize: 14,
    isMobile: new MobileDetect(window.navigator.userAgent).mobile(),
  };

  componentDidMount() {
    document.addEventListener("dragenter", e => this.handleDragEnter(e), true);
    document.addEventListener("dragleave", e => this.handleDragLeave(e), true);
  }

  componentWillUnmount() {
    document.removeEventListener("dragEnter", e => this.handleDragEnter(e), true);
    document.removeEventListener("dragleave", e => this.handleDragLeave(e), true);
  }

  initCurrentElement(startX, startY) {
    const { type, color, strokeWidth, fontSize } = this.state;
    if (type !== null) {
      const currentElement = {
        id: unique_id(type),
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
        dropzone: false,
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

  setCloseTextArea() {
    this.setState(state => {
      return { ...state, type: null, isDrawing: false, currentElement: {} };
    });
  }

  setColor(color) {
    this.setState(state => {
      return { ...state, color };
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

  setDropZone() {
    this.setState(state => {
      return { ...state, dropzone: !state.dropzone };
    });
  }

  setFontSize(fontSize) {
    this.setState(state => {
      return { ...state, fontSize };
    });
  }
  setInitDrawZone(rect) {
    this.setState(state => {
      return { ...state, drawZone: rect };
    });
  }

  setOffset(offset) {
    this.setState(state => {
      return {
        ...state,
        offset,
      };
    });
  }

  setStrokeWidth(strokeWidth) {
    this.setState(state => {
      return { ...state, strokeWidth: parseInt(strokeWidth) };
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

  setAcceptedFiles(acceptedFiles) {
    if (!!acceptedFiles.length) {
      const image = new window.Image();
      encodedImage(acceptedFiles[0].preview).then(dataUrl => {
        image.src = dataUrl;
        image.onload = () => {
          this.setState(state => {
            return { ...state, imgBackground: image, dropzone: false };
          });
        };
      });
    }
  }

  setRejectedFiles(rejectedFiles) {
    if (!!rejectedFiles.length) {
      alert("rejectedfiles >>>", rejectedFiles);
    }
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
    this.setOffset({ startX: e.evt.offsetX, startY: e.evt.offsetY });
  }

  handleDragEnd(e) {
    const draggedElementIndex = findIndex(propEq("id", e.target.attrs.id))(this.state.elements);
    this.setDraggedElement(draggedElementIndex, e.evt.offsetX, e.evt.offsetY);
  }

  handleDragEnter = e => {
    e.preventDefault();
    this.setDropZone();
  };

  handleDragLeave = e => {
    e.preventDefault();
    const isFilesDragVoid = (width, height) => {
      return (width < 10 || width > window.innerWidth - 10) && (height < 10 || height > window.innerHeight - 10);
    };
    if (isFilesDragVoid) {
      this.setState(state => {
        return {
          ...state,
          dropzone: false,
        };
      });
    }
  };

  render() {
    const {
      color,
      currentElement,
      drawZone,
      dropzone,
      elements,
      isDrawing,
      fontSize,
      isMobile,
      imgBackground,
      strokeWidth,
      type,
    } = this.state;

    return (
      <React.Fragment>
        <ToolsMenu
          setColor={this.setColor.bind(this)}
          color={color}
          ismobile={isMobile}
          type={type}
          setType={this.setType.bind(this)}
          undo={this.undo.bind(this)}
          setDropZone={this.setDropZone.bind(this)}
          strokeWidth={strokeWidth}
          setStrokeWidth={this.setStrokeWidth.bind(this)}
        />
        {dropzone ? (
          <DropItem
            setAcceptedFiles={this.setAcceptedFiles.bind(this)}
            setRejectedFiles={this.setRejectedFiles.bind(this)}
          />
        ) : (
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
            {imgBackground && <Background image={imgBackground} />}
            <Elements
              elements={elements}
              dragEvents={{
                handleDragStart: this.handleDragStart.bind(this),
                handleDragEnd: this.handleDragEnd.bind(this),
              }}
              type={type}
            />
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
          </CanvasZone>
        )}
      </React.Fragment>
    );
  }
}
