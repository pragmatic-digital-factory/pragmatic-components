import React from 'react';
import { storiesOf } from '@storybook/react';

import FormAmount from '../src/components/Form/FormAmount';

export default storiesOf('FormAmount', module)
  .add('Default', () => <FormAmount />)
  .add('disabled', () => <FormAmount disabled />)
  .add('label', () => <FormAmount label="Label" />)
  .add('className - dirty', () => <FormAmount className="dirty" />)
  .add('className - error', () => <FormAmount className="error" />)
  .add('className - missing', () => <FormAmount className="missing" />)
  .add('maxLength', () => <FormAmount maxLength="5" />, { info: `maxlength set of 5 set.` })
  .add('name', `name set.`, () => <FormAmount name="FormAmountName" />)
  .add('onBlur', () => {
    return (
      <div>
        <FormAmount onBlur={e => alert('You have left the FormAmount field')} />
        <FormAmount />
      </div>
    );
  })
  .add('onChange', () => (
    <FormAmount
      onChange={e => {
        alert('You are selecting an option');
      }}
    />
  ))
  .add('onFocus', () => (
    <FormAmount
      onFocus={e => {
        alert('You focused the select field');
        e.target.blur();
      }}
    />
  ))
  .add('placeholder', () => <FormAmount placeholder="Placeholder" />)
  .add('readOnly', () => <FormAmount readOnly />)
  .add('required', () => <FormAmount label="label" required />)
  .add('amountFormat', () => <FormAmount label="label" required amountFormat="0 a" value="1000" />)
  .add('currency', () => <FormAmount label="label" currency="$" />)
  .add('value', () => <FormAmount value="40000" />);
