import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import FormInput from '../src/components/Form/FormInput';

const Wrapper = storyFn => {
  return <form className={'ui form'}>{storyFn()}</form>;
};

let toggled = false;
addDecorator(Wrapper);
export default storiesOf('FormInput', module)
  .add('default', () => <FormInput className={'field'} />)
  .add('autocomplete', () => (
    <form>
      <FormInput autoComplete="on" className={'field'} />
      <button className={'ui button'} type="submit">
        Submit
      </button>
    </form>
  ))
  .add('className', () => <FormInput className="field error" />)
  .add('disabled', () => <FormInput disabled className={'field'} />)
  .add('errors', () => <FormInput errors={['Error on the field']} className="field error" />)
  .add('label', () => <FormInput label="My input Label" className={'field'} />)
  .add('minLength', () => (
    <div>
      <form>
        <FormInput label="Label" minLength="5" className={'field'} />
        <button type="submit">Submit</button>
      </form>
    </div>
  ))
  .add('maxLength', () => <FormInput label="Label" maxLength="5" className={'field'} />)
  .add('pattern - blob', () => (
    <div>
      <form>
        <FormInput pattern="blob" className={'field'} />
        <button type="submit">Submit</button>
      </form>
    </div>
  ))
  .add('name', () => <FormInput name="inputName" className={'field'} />)
  .add('onBlur', () => {
    return (
      <div>
        <FormInput
          placeholder="First focus on this field then tab"
          onBlur={e => alert('You have left the field')}
          className={'field'}
        />
        <FormInput />
      </div>
    );
  })
  .add('onChange', `onChange handler set.`, () => (
    <FormInput
      onChange={e => {
        alert('You are typing in the field');
      }}
      className={'field'}
    />
  ))
  .add('onFocus', () => (
    <FormInput
      onFocus={e => {
        alert('You focus the field');
        e.target.blur();
      }}
      className={'field'}
    />
  ))
  .add('placeholder', () => <FormInput className={'field'} placeholder="Placeholder" />)
  .add('required', () => <FormInput className={'field'} required label="label" />)
  .add('readOnly', () => <FormInput className={'field'} readOnly />)
  .add('step', () => <FormInput className={'field'} step="10" type="number" />)
  .add('type - checkbox', () => (
    <div>
      <FormInput type="checkbox" name="checkbox" className={'ui checkbox'} label={'check 1'} />
    </div>
  ))
  .add('type - email', () => (
    <div>
      <form>
        <FormInput type="email" className={'field'} />
        <button type="submit">Submit</button>
      </form>
    </div>
  ))
  .add('type - number', () => <FormInput type="number" className={'field'} />)
  .add(
    'type - radio',
    () => (
      <div>
        {[1, 2, 3].map(value => (
          <FormInput key={value} type="radio" value={value} className={'ui radio checkbox'} label={`${value}`} />
        ))}
      </div>
    ),
    { info: `radio type set.` }
  )
  .add('toggle', () => (
    <FormInput
      name={'toggle'}
      value=""
      className={`ui toggle checkbox ${toggled ? 'fitted' : 'checked'}`}
      type={'radio'}
      label={' '}
    />
  ))
  .add('type - range', () => <FormInput type="range" />)
  .add('value', () => <FormInput value="4" className={'field'} />);
