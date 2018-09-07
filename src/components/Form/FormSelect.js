import React from 'react';
import PropTypes from 'prop-types';
import noop from '../../utils/noop';
import Label from './Label';
import FormErrors from './FormErrors';

export default class FormSelect extends React.Component {
  constructor(props) {
    super(props);
  }

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

  generateOptions(options) {
    return Object.keys(options).map(option => ({
      label: options[option],
      value: option,
    }));
  }

  generateGroups(groups) {
    return Object.keys(groups).map(group => ({
      label: groups[group].label,
      options: groups[group].options,
      disabled: groups[group].disabled,
    }));
  }

  renderOptions(options) {
    const myoptions = this.generateOptions(options);
    return myoptions.map(({ label, value }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ));
  }

  renderGroups(groups) {
    let result = [];
    result.push(this.renderPlaceholder());

    groups &&
      typeof groups[Object.keys(groups)[0]] === 'object' &&
      this.generateGroups(groups).forEach(({ label, options, disabled }) =>
        result.push(
          <optgroup key={label} disabled={disabled} label={label}>
            {this.renderOptions(options)}
          </optgroup>
        )
      );

    groups && typeof groups[Object.keys(groups)[0]] === 'string' && result.push(this.renderOptions(groups));

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
  options: PropTypes.object,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};
