import React, { Component } from "react";

export const FormContext = React.createContext();

class FormProvider extends Component {
  constructor(props) {
    super();
    this.state = {
      "shipping[first-name]": {
        value: "",
        errors: [],
      },
      "shipping[last-name]": {
        value: "",
        errors: [],
      },
      "shipping[address]": {
        value: "",
        errors: [],
      },
      "shipping[address-2]": {
        value: "",
        errors: [],
      },
      "shipping[country]": {
        value: "",
        errors: [],
      },
    };
  }

  setFormField(e, field) {
    const value = e.target.value;
    this.setState(state => {
      return { ...state, [field]: { ...state[field], value } };
    });
  }

  render() {
    return (
      <FormContext.Provider value={{ state: this.state, setFormField: this.setFormField.bind(this) }}>
        {this.props.children}
      </FormContext.Provider>
    );
  }
}

export default FormProvider;
