import React from "react";
import classNames from "classnames";

class CanvasTextArea extends React.Component {
  constructor(props, context) {
    super();
    this.state = {
      textAreaValue: "",
    };
  }

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
    const { t, currentElement, drawZone, fontSize, setFontSize } = this.props;
    const { textAreaValue } = this.state;
    return (
      <div
        style={{
          width: 220,
          height: 100,
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
            height: 50,
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
        <div
          className="btn-group d-flex justify-content-between"
          style={{ background: "#FFFFFF", padding: "5px", width: 210, zIndex: 395 }}
        >
          <div className="btn-group btn-group-sm font-size">
            <button
              className={classNames("btn btn-outline-secondary font-size-small", {
                active: fontSize === 14,
              })}
              onClick={() => setFontSize(14)}
            >
              <i className="fa fa-font" />
            </button>
            <button
              className={classNames("btn btn-outline-secondary font-size-medium", {
                active: fontSize === 18,
              })}
              onClick={() => setFontSize(18)}
            >
              <i className="fa fa-font" />
            </button>
            <button
              className={classNames("btn btn-outline-secondary font-size-large", {
                active: fontSize === 22,
              })}
              onClick={() => setFontSize(22)}
            >
              <i className="fa fa-font" />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn btn btn-secondary btn-sm mr-1" onClick={() => this.handleCancel()}>
              <i className="fa fa-times" />
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
