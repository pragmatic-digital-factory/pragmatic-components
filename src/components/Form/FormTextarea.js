import React from 'react';
import PropTypes from 'prop-types';
import noop from '../../utils/noop';
import Label from './Label';
import FormErrors from './FormErrors';

export default class FormTextarea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      autoComplete,
      className,
      cols,
      disabled,
      label,
      minLength,
      maxLength,
      name,
      onBlur,
      onChange,
      onFocus,
      errors,
      placeholder,
      readOnly,
      required,
      rows,
      value,
      wrap,
    } = this.props;

    return (
      <div className={className}>
        {label && <Label>{label}</Label>}
        {React.createElement('textarea', {
          autoComplete,
          cols,
          disabled,
          minLength,
          maxLength,
          name,
          onBlur,
          onChange,
          onFocus,
          placeholder,
          readOnly,
          required,
          rows,
          value,
          wrap,
        })}
        {errors && errors.length > 0 && <FormErrors errors={errors} />}
      </div>
    );
  }
}

FormTextarea.defaultProps = {
  name: 'textAreaName',
  onChange: noop,
  rows: 5,
};

FormTextarea.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  cols: PropTypes.number,
  disabled: PropTypes.bool,
  errors: PropTypes.array,
  label: PropTypes.string,
  minLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
};
