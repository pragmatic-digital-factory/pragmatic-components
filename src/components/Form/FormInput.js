import React from "react";
import PropTypes from "prop-types";
import noop from "../../utils/noop";
import Label from "./Label";
import FormErrors from "./FormErrors";

export default class FormInput extends React.Component {
  render() {
    const {
      autoComplete,
      className,
      disabled,
      label,
      minLength,
      maxLength,
      name,
      onBlur,
      onChange,
      onFocus,
      errors,
      pattern,
      placeholder,
      readOnly,
      required,
      step,
      type,
      value,
      max,
    } = this.props;
    let { min } = this.props;

    // API can return null and null is 0 for backend
    if (min === null) min = 0;

    return (
      <div className={className}>
        {!/checkbox/.test(type) && !/radio/.test(type) && label && <Label>{label}</Label>}
        {React.createElement("input", {
          autoComplete,
          disabled,
          minLength,
          maxLength,
          name,
          onBlur,
          onChange,
          onFocus,
          pattern,
          placeholder,
          readOnly,
          required,
          step,
          type,
          value,
          min,
          max,
        })}
        {errors && errors.length > 0 && <FormErrors errors={errors} />}
        {(/checkbox/.test(type) || /radio/.test(type)) && label && <Label>{label}</Label>}
      </div>
    );
  }
}

FormInput.defaultProps = {
  name: "inputName",
  type: "text",
  onChange: noop,
};

FormInput.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  errors: PropTypes.array,
  label: PropTypes.string,
  minLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  step: PropTypes.string,
  type: PropTypes.oneOf(["checkbox", "email", "hidden", "number", "tel", "text", "radio", "range"]),
};
