import React, { Component } from 'react';

export default (onChange=(e,fieldName)=> {= e.target.value}, fieldName) => {
  return WrappedFormComponent => {
    class FormWithHOC extends Component {
      constructor(props) {
          super(props);
          state = {
              form: FormTemplate,
          };
      }
        setFieldValue(value) {


      }
      render() {
        return <WrappedFormComponent { ...props, onChange=((fieldName) => onChange) />;
      }
    }
    return FormWithHOC;
  };
};
