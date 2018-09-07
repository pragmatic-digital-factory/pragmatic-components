import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import FormErrors from './FormErrors';
import numeral from 'numeral';

export default class FormAmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.placeholder && !props.value ? props.placeholder : this.format(props.value),
      focused: false,
    };
  }

  componentWillUpdate(newProps) {
    if (this.format(this.props.value) !== this.format(newProps.value)) {
      if (!this.state.focused) {
        this.setState({
          value: this.format(newProps.value),
        });
      }
    }
  }

  onBlur = e => {
    this.setState({
      focused: false,
      value: this.format(this.parse(this.state.value)),
    });
    const event = this.eventWithParsedValue(e);
    if (this.props.onChange) this.props.onChange(event);
    if (this.props.onBlur) this.props.onBlur(event);
  };

  eventWithParsedValue = e => {
    e.target.value = this.parse(this.state.value);
    return e;
  };

  onKeyPress = e => {
    const { key } = e;
    const match = key.match(/[\d,.]|Enter/);
    if (!match) {
      e.preventDefault();
    }
  };

  onFocus = e => {
    this.setState({ focused: true });
    if (this.props.onFocus) this.props.onFocus(e);
  };

  onChange = e => {
    const value = e.target.value;
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(event);
  };

  format = value => {
    if (value === '') return '';
    const number = parseFloat(value);
    if (this.props.amountFormat) return numeral(number).format(this.props.amountFormat);
    return numeral(number).format(number >= 20 ? '0,0' : '0,0.00');
  };

  parse = string => {
    const value = numeral(string).value();
    return value !== null ? value.toString() : '';
  };

  render() {
    const {
      autoComplete,
      className,
      disabled,
      errors,
      minLength,
      maxLength,
      name,
      label,
      unit,
      placeholder,
      readOnly,
      required,
    } = this.props;
    const { value } = this.state;
    return (
      <div className={className}>
        {label && <Label>{label}</Label>}
        {React.createElement('input', {
          autoComplete,
          disabled,
          minLength,
          maxLength,
          name,
          onBlur: this.onBlur,
          onChange: this.onChange,
          onFocus: this.onFocus,
          onKeyPress: this.onKeyPress,
          placeholder,
          readOnly,
          required,
          value,
        })}
        {errors && errors.length > 0 && <FormErrors errors={errors} />}
        {unit && <span className="unit">{unit}</span>}
      </div>
    );
  }
}

FormAmount.defaultProps = {
  name: 'amountName',
  unit: '€',
};

FormAmount.PropTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  errors: PropTypes.array,
  amountFormat: PropTypes.string,
  label: PropTypes.string,
  minLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  unit: PropTypes.string,
};

export class CheckboxGroup extends React.Component {
  checkboxGroup() {
    let { label, required, options, input, meta } = this.props;

    return options.map((option, index) => {
      return (
        <div className="checkbox" key={index}>
          <label>
            <input
              type="checkbox"
              name={`${input.name}[${index}]`}
              value={option.name}
              checked={input.value.indexOf(option.name) !== -1}
              onChange={event => {
                const newValue = [...input.value];
                if (event.target.checked) {
                  newValue.push(option.name);
                } else {
                  newValue.splice(newValue.indexOf(option.name), 1);
                }

                return input.onChange(newValue);
              }}
            />
            {option.name}
          </label>
        </div>
      );
    });
  }

  render() {
    return <div>{this.checkboxGroup()}</div>;
  }
}
