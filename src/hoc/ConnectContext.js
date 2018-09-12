import React from 'react';
import { FormContext } from '../pages/Form/FormProvider';

export const ConnectContext = WrappedComponent => {
  const WithContext = props => {
    return (
      <FormContext.Consumer>
        {context => {
          const enhanceProps = { ...props, context };
          return <WrappedComponent {...enhanceProps} />;
        }}
      </FormContext.Consumer>
    );
  };
  return WithContext;
};
