import React from "react";
import PropTypes from "prop-types";
import { ChromePicker } from "react-color";

class ColorPicker extends React.Component {
  state = { displayColorPicker: false };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  render() {
    const { setColor, color } = this.props;
    const popover = {
      position: "absolute",
      zIndex: "2",
    };
    const cover = {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    };
    return (
      <div>
        <button onClick={this.handleClick}>Pick Color</button>
        {this.state.displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={this.handleClose} />
            <ChromePicker
              color={color}
              onChangeComplete={color => {
                setColor(color.hex);
              }}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
ColorPicker.propTypes = { setColor: PropTypes.func };
export default ColorPicker;
