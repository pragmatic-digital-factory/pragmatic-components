import React from 'react';
import { storiesOf } from '@storybook/react';

import FormSelect from '../src/components/Form/FormSelect';

export default storiesOf('FormSelect', module)
  .add('default', () => <FormSelect />, { info: `This is the basic usage of the select.` })
  .add(
    'autoComplete',
    () => (
      <div>
        <form>
          <FormSelect
            autoComplete="on"
            options={{
              option1: 'Option 1',
              option2: 'Option 2',
              option3: 'Option 3',
            }}
          />
          <button onClick={() => history.go(0)}>Reload the page</button>
        </form>
      </div>
    ),
    { info: `autoComplete set.` }
  )
  .add('className - dirty', () => <FormSelect className="dirty" />, {
    info: `Dirty class is added when the field was touched.`,
  })
  .add('className - error', () => <FormSelect className="error" />, {
    info: `Error class is added when the validation field failed.`,
  })
  .add('className - missing', () => <FormSelect className="missing" />, {
    info: `Missing class is added when the field is required and not filled.`,
  })
  .add(
    'disabled',
    () => (
      <FormSelect
        disabled
        options={{
          option1: 'Option 1',
          option2: 'Option 2',
          option3: 'Option 3',
        }}
      />
    ),
    { info: `The field is set disabled.` }
  )
  .add('errors', () => <FormSelect errors={['Error on the field']} />, {
    info: `In case of validation errors messages are display under the field.`,
  })
  .add(
    'label',
    () => (
      <FormSelect
        label="Label"
        options={{
          option1: 'Option 1',
          option2: 'Option 2',
          option3: 'Option 3',
        }}
      />
    ),
    { info: `label set` }
  )
  .add(
    'name',
    () => (
      <FormSelect
        name="nameOfSelect"
        options={{
          option1: 'Option 1',
          option2: 'Option 2',
          option3: 'Option 3',
        }}
      />
    ),
    { info: `name set` }
  )
  .add(
    'onBlur',
    () => {
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
    },
    { info: `onBlur handler set.` }
  )
  .add(
    'onChange',
    () => (
      <FormSelect
        options={{
          option1: 'Option 1',
          option2: 'Option 2',
          option3: 'Option 3',
        }}
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
    ),
    { info: `onFocus handler set.` }
  )
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
  .add(
    'options - with groups',
    () => (
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
    ),
    { info: `Options with multiple groups displayed in optgroup set.` }
  )
  .add(
    'options - with disabled groups',
    () => (
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
    ),
    { info: `Options with multiple groups displayed in optgroup could be disabled.` }
  )
  .add('required', () => <FormSelect label="label" required />, { info: `required set.` })
  .add(
    'value',
    () => (
      <FormSelect
        options={{
          option1: 'Option 1',
          option2: 'Option 2',
          option3: 'Option 34',
        }}
        value="option1"
      />
    ),
    { info: `value set.` }
  );
