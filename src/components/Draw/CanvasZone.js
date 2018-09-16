import React from "react";
import PropTypes from "prop-types";
import { Layer, Stage } from "react-konva";
import { DrawElements } from "../../constants";
import CanvasTextArea from "./draw-elements/CanvasTextArea";
import classNames from "classnames";
import { encodedImage } from "./utils";
// import ImageBackground from './ImageBackground'

export default class CanvasZone extends React.Component {
  static propTypes = {
    eventsHandler: PropTypes.shape({
      handleTouchStart: PropTypes.func.isRequired,
      handleTouchMove: PropTypes.func.isRequired,
      handleTouchEnd: PropTypes.func.isRequired,
      handleMouseDown: PropTypes.func.isRequired,
      handleMouseMove: PropTypes.func.isRequired,
      handleMouseUp: PropTypes.func.isRequired,
    }),
    currentElement: PropTypes.object,
    setTextBox: PropTypes.func,
    setFontSize: PropTypes.func,
  };

  componentDidMount() {
    const { setInitDrawZone } = this.props;
    setInitDrawZone(this.refs.canvasZone.getBoundingClientRect());
    // if (DrawView.photoEdit) {
    //   const image = new window.Image();
    //   encodedImage(DrawView.imgBackgroundUrl).then(dataUrl => {
    //     image.src = dataUrl;
    //     image.onload = () => {
    //       if (image.width > image.height) {
    //         const ratio = image.width / image.height;
    //         image.width = DrawView.drawZone.width;
    //         image.height = image.width / ratio;
    //         DrawView.setInitDrawZone({ height: image.height, width: image.width });
    //       } else if (image.height > image.width) {
    //         const ratio = image.height / image.width;
    //         image.height = DrawView.drawZone.height;
    //         image.width = image.height / ratio;
    //         DrawView.setInitDrawZone({ height: image.height, width: image.width });
    //       }
    //       DrawView.setImgBackground(image);
    //     };
    //   });
    // }
  }

  // renderBackground() {
  //   if (DrawView.imgBackground) {
  //     return <ImageBackground image={DrawView.imgBackground} width={DrawView.drawZone.width} />;
  //   }
  //   return null;
  // }
  //
  // renderElements() {
  //   return toJS(Draw.splice(-1)View.elements).map((element, index) => {
  //     return this.getElementComponent(element, index);
  //   });
  // }
  //

  render() {
    const {
      eventsHandler: {
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleMouseDown,
        handleMouseUp,
        handleMouseMove,
      },
      currentElement,
      drawZone,
      fontSize,
      isDrawing,
      isMobile,
      setTextBox,
      setFontSize,
      setCloseTextArea,
      type,
    } = this.props;

    const stageProps = isMobile
      ? {
          onTouchStart: e => handleTouchStart(e),
          onTouchMove: e => handleTouchMove(e),
          onTouchEnd: e => handleTouchEnd(e),
        }
      : {
          onContentMouseDown: e => handleMouseDown(e),
          onContentMouseUp: e => handleMouseUp(e),
          onContentMouseMove: e => handleMouseMove(e),
        };
    return (
      <div
        // className={classnames("canvas-zone", {
        //   "photo-edit": DrawView.photoEdit,
        //   "text-edit": DrawView.type === DrawElements.TEXT_AREA,
        // })}
        className={classNames("canvas-zone", { crosshair: isDrawing, grab: !isDrawing })}
        ref={"canvasZone"}
      >
        {type === DrawElements.TEXT_AREA &&
          isDrawing && (
            <CanvasTextArea
              currentElement={currentElement}
              drawZone={drawZone}
              fontSize={fontSize}
              setCloseTextArea={setCloseTextArea}
              setFontSize={setFontSize}
              setTextBox={setTextBox}
            />
          )}
        <Stage {...stageProps} width={drawZone ? drawZone.width : 1000} height={drawZone ? drawZone.height - 25 : 0}>
          <Layer>
            {/*{DrawView.photoEdit && this.renderBackground()}*/}
            {this.props.children}
          </Layer>
        </Stage>
      </div>
    );
  }
}
