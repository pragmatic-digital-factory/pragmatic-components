import React, { Component } from 'react';

import { Icon } from 'semantic-ui-react';
import classNames from 'classnames';

import FormField from './FormField';

export default class FormAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reduced: false,
    };
  }

  reduceForm() {
    this.setState({ reduced: !this.state.reduced });
  }

  render() {
    return (
      <fieldset
        key={this.props.name}
        className={classNames(this.props.name.toLowerCase(), { 'hide-fieldset': this.state.reduced })}
      >
        <div className="legend" onClick={this.reduceForm}>
          {this.props.name}
          <Icon
            name={classNames('chevron', { down: this.state.reduced, up: !this.state.reduced })}
            style={{ float: 'right' }}
          />
        </div>

        <div className={classNames({ 'hide-block': this.state.reduced })}>
          {this.props.fields.map(field => <FormField key={field.name} {...field} />)}
        </div>
      </fieldset>
    );
  }
}
