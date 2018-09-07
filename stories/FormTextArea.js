import React from 'react';
import { storiesOf } from '@storybook/react';

import FormTextarea from '../src/components/Form/FormTextarea';

export default storiesOf('FormTextArea', module)
  .add('default', () => <FormTextarea />, { info: `Basic` })
  .add('cols', () => <FormTextarea cols={40} />, { info: `A cols number of 40 is set.` })
  .add('className - dirty', () => <FormTextarea className="dirty" />, {
    info: `Dirty class is added when the field was touched.`,
  })
  .add('className - error', () => <FormTextarea className="error" />, {
    info: `Error class is added when the validation field failed.`,
  })
  .add('className - missing', () => <FormTextarea className="missing" />, {
    info: `Missing class is added when the field is required and not filled.`,
  })
  .add('disabled', () => <FormTextarea disabled />, { info: `disabled set.` })
  .add('errors', () => <FormTextarea errors={['Error on the field']} />, {
    info: `In case of validation errors messages are display under the field.`,
  })
  .add('label', () => <FormTextarea label="label" />, { info: `label set.` })
  .add(
    'minlength',
    () => (
      <div>
        <form>
          <FormTextarea minLength="5" />
          <button type="Submit">Submit</button>
        </form>
      </div>
    ),
    { info: `minlength of 5 set.` }
  )
  .add('maxLength', () => <FormTextarea maxLength="5" />, { info: `maxlength of 5 set.` })
  .add('name', () => <FormTextarea name="textAreaName" />, { info: `name set.` })
  .add(
    'onBlur',
    () => {
      return (
        <div>
          <FormTextarea
            placeholder="First focus on this field then tab"
            onBlur={e => alert('You have left the field')}
          />
          <FormTextarea />
        </div>
      );
    },
    { info: `onBlur handler set.` }
  )
  .add(
    'onChange',
    () => (
      <FormTextarea
        onChange={e => {
          alert('You are typing in the field');
        }}
      />
    ),
    { info: `onChange handler set.` }
  )
  .add(
    'onFocus',
    () => (
      <FormTextarea
        onFocus={e => {
          alert('You focused the field');
          e.target.blur();
        }}
      />
    ),
    { info: `onFocus handler set.` }
  )
  .add('placeholder', () => <FormTextarea placeholder="Placeholder" />, { info: `placeholder set.` })
  .add('readOnly', () => <FormTextarea readOnly />, { info: `readonly set.` })
  .add('required', () => <FormTextarea required label="Label" />, { info: `required set.` })
  .add('rows', () => <FormTextarea rows={40} />, { info: `e.g row number of 40 set.` });
