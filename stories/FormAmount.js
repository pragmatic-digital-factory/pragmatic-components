import React from 'react';
import { storiesOf } from '@storybook/react';

import FormAmount from '../src/components/Form/FormAmount';

export default storiesOf('FormAmount', module)
  .add('Default', () => <FormAmount />, { info: `This is the basic usage of FormInput.` })
  .add('disabled', () => <FormAmount disabled />, { info: `disabled set.` })
  .add('label', () => <FormAmount label="Label" />, { info: `label set.` })
  .add('className - dirty', () => <FormAmount className="dirty" />, {
    info: `Dirty class is added when the field was touched.`,
  })
  .add('className - error', () => <FormAmount className="error" />, {
    info: `Error class is added when the validation field failed.`,
  })
  .add('className - missing', () => <FormAmount className="missing" />, {
    info: `Missing class is added when the field is required and not filled.`,
  })
  .add('maxLength', () => <FormAmount maxLength="5" />, { info: `maxlength set of 5 set.` })
  .add('name', `name set.`, () => <FormAmount name="FormAmountName" />)
  .add(
    'onBlur',
    () => {
      return (
        <div>
          <FormAmount onBlur={e => alert('You have left the FormAmount field')} />
          <FormAmount />
        </div>
      );
    },
    { info: `onBlur handler set.` }
  )
  .add(
    'onChange',
    () => (
      <FormAmount
        onChange={e => {
          alert('You are selecting an option');
        }}
      />
    ),
    { info: `onChange handler set.` }
  )
  .add(
    'onFocus',
    () => (
      <FormAmount
        onFocus={e => {
          alert('You focused the select field');
          e.target.blur();
        }}
      />
    ),
    { info: `onFocus handler set.` }
  )
  .add('placeholder', () => <FormAmount placeholder="Placeholder" />, { info: `placeholder set.` })
  .add('readOnly', () => <FormAmount readOnly />, { info: `readonly set.` })
  .add('required', () => <FormAmount label="label" required />, { info: `required set.` })
  .add('amountFormat', () => <FormAmount label="label" required amountFormat="0 a" value="1000" />, {
    info: `A format pattern is given - Please see numeral.js documentation for available patterns.`,
  })
  .add('unit', () => <FormAmount label="label" unit="$" />, { info: `unit set.` })
  .add('value', () => <FormAmount value="40000" />, { info: `value set.` });
