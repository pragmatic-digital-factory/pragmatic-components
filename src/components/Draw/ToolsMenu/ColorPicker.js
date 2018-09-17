import React from "react";
import PropTypes from "prop-types";
import { TwitterPicker } from "react-color";

const ColorPicker = ({ setColor }) => {
  return (
    <TwitterPicker
      colors={["#e6194b", "#3cb44b", "#ffe119", "#0082c8", "#f58231", "#ffffff", "#f032e6", "#aa6e28", "#000000"]}
      width={500}
      height={75}
      triangle={"hide"}
      onChange={color => {
        setColor(color.hex);
      }}
    />
  );
};

ColorPicker.propTypes = { setColor: PropTypes.func };
export default ColorPicker;
