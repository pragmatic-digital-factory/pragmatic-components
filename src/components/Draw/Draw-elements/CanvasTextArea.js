import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

class CanvasTextArea extends React.Component {
  constructor(props, context) {
    super();
    this.state = {
      textAreaValue: "",
    };
  }

  static propTypes = {
    currentElement: PropTypes.object,
    drawZone: PropTypes.object,
    fontSize: PropTypes.number,
    setFontSize: PropTypes.func,
    setTextBox: PropTypes.func,
  };

  componentDidMount() {
    this.textareaBox.focus();
  }

  onChangeTextArea = e => {
    this.setState({ textAreaValue: e.target.value });
  };

  handleConfirm = e => {
    this.props.setTextBox(this.state.textAreaValue);
  };

  handleCancel = e => {
    this.props.setCloseTextArea(this.state.textAreaValue);
  };

  render() {
    const { currentElement, drawZone, fontSize, setFontSize } = this.props;
    const { textAreaValue } = this.state;
    return (
      <div
        style={{
          width: 220,
          height: 150,
          position: "absolute",
          overflow: "hidden",
          top: currentElement.startY > drawZone.height - 110 ? drawZone.height - 110 : currentElement.startY,
          left: currentElement.startX > drawZone.width - 230 ? drawZone.width - 230 : currentElement.startX,
          background: "#FFFFFF",
          zIndex: 990,
          padding: "5px",
        }}
      >
        <textarea
          style={{
            width: 210,
            height: 80,
            maxHeight: 150,
            fontSize: fontSize - 1,
            resize: "none",
          }}
          onChange={e => this.onChangeTextArea(e)}
          value={textAreaValue}
          placeholder={"Your text here"}
          ref={textarea => {
            this.textareaBox = textarea;
          }}
        />
        <div style={{ background: "#FFFFFF", padding: "5px", width: 210, zIndex: 395 }}>
          <div>
            <button
              className={classNames("btn btn-outline-secondary font-size-small", {
                active: fontSize === 14,
              })}
              onClick={() => setFontSize(14)}
            >
              normal
            </button>
            <button
              className={classNames("btn btn-outline-secondary font-size-medium", {
                active: fontSize === 18,
              })}
              onClick={() => setFontSize(18)}
            >
              Big
            </button>
            <button
              className={classNames("btn btn-outline-secondary font-size-large", {
                active: fontSize === 22,
              })}
              onClick={() => setFontSize(22)}
            >
              Huge
            </button>
          </div>
          <div className="btn-group">
            <button className="btn btn btn-secondary btn-sm mr-1" onClick={() => this.handleCancel()}>
              cancel
            </button>
            <button className="btn btn-primary btn-sm" onClick={() => this.handleConfirm()}>
              validate
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CanvasTextArea;
