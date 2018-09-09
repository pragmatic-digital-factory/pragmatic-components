import React from 'react';
import { storiesOf } from '@storybook/react';

import FormSelect from '../src/components/Form/FormSelect';

export default storiesOf('FormSelect', module)
  .add('default', () => (
    <FormSelect
      options={{
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
      }}
    />
  ))
  .add('autoComplete', () => (
    <div>
      <FormSelect
        autoComplete="on"
        options={{
          option1: 'Option 1',
          option2: 'Option 2',
          option3: 'Option 3',
        }}
      />
      <button onClick={() => history.go(0)}>Reload the page</button>
    </div>
  ))
  .add('className', () => (
    <FormSelect
      className="field"
      options={{
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
      }}
    />
  ))
  .add('disabled', () => (
    <FormSelect
      disabled
      options={{
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
      }}
    />
  ))
  .add('errors', () => (
    <FormSelect
      errors={['Error on the field']}
      options={{
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
      }}
      className="error field"
    />
  ))
  .add('label', () => (
    <FormSelect
      label="Label"
      options={{
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
      }}
    />
  ))
  .add('name', () => (
    <FormSelect
      name="nameOfSelect"
      options={{
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
      }}
    />
  ))
  .add('onBlur', () => {
    return (
      <div>
        <FormSelect
          placeholder="common.select"
          onBlur={e => alert('You have left the select field')}
          options={{
            option1: 'Option 1',
            option2: 'Option 2',
            option3: 'Option 3',
          }}
        />
        <FormSelect />
      </div>
    );
  })
  .add('onChange', () => (
    <FormSelect
      options={{
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
      }}
      onChange={e => {
        alert(`You are selecting the option : ${e.target.value}`);
      }}
    />
  ))
  .add('onFocus', () => (
    <FormSelect
      options={{
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
      }}
      onFocus={e => {
        alert('You focused the select field');
        e.target.blur();
      }}
    />
  ))
  .add('placeholder', () => <FormSelect placeholder="common.select" />, { info: `placeholder set.` })
  .add('options', `Options set`, () => (
    <FormSelect
      options={{
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
      }}
    />
  ))
  .add('options - with groups', () => (
    <FormSelect
      options={{
        group1: {
          label: 'Groupe 1',
          options: {
            option1: 'Option 1',
            option2: 'Option 2',
            option3: 'Option 3',
          },
          disabled: false,
        },
        group2: {
          label: 'Groupe 2',
          options: {
            option1: 'Option 1',
            option2: 'Option 2',
            option3: 'Option 3',
          },
          disabled: false,
        },
      }}
    />
  ))
  .add('options - with disabled groups', () => (
    <FormSelect
      options={{
        group1: {
          label: 'Groupe 1',
          options: {
            option1: 'Option 1',
            option2: 'Option 2',
            option3: 'Option 3',
          },
          disabled: false,
        },
        group2: {
          label: 'Groupe 2',
          options: {
            option1: 'Option 1',
            option2: 'Option 2',
            option3: 'Option 3',
          },
          disabled: true,
        },
      }}
    />
  ))
  .add('required', () => <FormSelect label="label" required />, { info: `required set.` })
  .add('value', () => (
    <FormSelect
      options={{
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 34',
      }}
      value="option1"
    />
  ));
