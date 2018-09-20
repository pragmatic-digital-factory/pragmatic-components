import React from 'react';
import PropTypes from 'prop-types';
import noop from '../../utils/noop';
import Label from './Label';
import FormErrors from './FormErrors';

export default class FormSelect extends React.Component {
  renderPlaceholder() {
    const { placeholder } = this.props;
    if (placeholder) {
      return (
        <option key="placeholder" value="">
          {placeholder}
        </option>
      );
    }
  }

  renderOptions(options) {
    return options.map(({ label, value }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ));
  }

  renderGroups(groups) {
    const result = [];
    result.push(this.renderPlaceholder());
    Object.keys(groups[0]).length > 2
      ? groups.forEach(({ label, options, disabled }) =>
          result.push(
            <optgroup key={label} disabled={disabled} label={label}>
              {this.renderOptions(options)}
            </optgroup>
          )
        )
      : result.push(this.renderOptions(groups));

    return result;
  }

  render() {
    const {
      autoComplete,
      className,
      disabled,
      errors,
      label,
      name,
      options,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required,
      value,
    } = this.props;
    return (
      <div className={className}>
        {label && <Label>{label}</Label>}
        <select
          autoComplete={autoComplete}
          disabled={disabled}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          required={required}
          value={value || ''}
        >
          {placeholder && !options && this.renderPlaceholder()}
          {options && this.renderGroups(options)}
        </select>
        {errors && errors.length > 0 && <FormErrors errors={errors} />}
      </div>
    );
  }
}

FormSelect.defaultProps = {
  name: 'selectName',
  onChange: noop,
};

FormSelect.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  errors: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};
