import React from 'react';
import Page from '../../hoc/page';
import FormInput from '../../components/Form/FormInput';
import FormSelect from '../../components/Form/FormSelect';
import CountryList from '../../enum/CountryList';
import MonthList from '../../enum/MonthList';
import { FormContext } from './FormProvider';
import Logger from '../../components/Logger';
class FormPage extends React.Component {
  render() {
    return (
      <div className="ui two column stackable grid">
        <FormContext.Consumer>
          {context => (
            <div className="column">
              <form className="ui form">
                <h4 className="ui dividing header">Shipping Information</h4>
                <div className="field">
                  <label>Name</label>

                  <div className="two fields">
                    <div className="field">
                      <FormInput
                        type="text"
                        name="shipping[first-name]"
                        placeholder="First Name"
                        value={context.state['shipping[first-name]']['value']}
                        onChange={e => context.setFormField(e, 'shipping[first-name]')}
                      />
                    </div>
                    <div className="field">
                      <FormInput
                        type="text"
                        name="shipping[last-name]"
                        placeholder="Last Name"
                        value={context.state['shipping[last-name]']['value']}
                        onChange={e => context.setFormField(e, 'shipping[last-name]')}
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label>Shipping Address</label>
                  <div className="fields">
                    <div className="twelve wide field">
                      <FormInput
                        type="text"
                        name="shipping[address]"
                        placeholder="Street Address"
                        value={context.state['shipping[address]']['value']}
                        onChange={e => context.setFormField(e, 'shipping[address]')}
                      />
                    </div>
                    <div className="four wide field">
                      <FormInput
                        type="text"
                        name="shipping[address-2]"
                        placeholder="Apt #"
                        value={context.state['shipping[address-2]']['value']}
                        onChange={e => context.setFormField(e, 'shipping[address-2]')}
                      />
                    </div>
                  </div>
                </div>
                <div className="fields">
                  <div className="twelve wide field">
                    <FormSelect
                      name={'shipping[country]'}
                      options={CountryList}
                      value={context.state['shipping[country]']['value']}
                      onChange={e => context.setFormField(e, 'shipping[country]')}
                    />
                  </div>
                </div>
                <h4 className="ui dividing header">Receipt</h4>
                <div className="ui segment">
                  <div className="field">
                    <div className="ui toggle checkbox">
                      <FormInput type="checkbox" name="gift" tabIndex="0" className="hidden" />
                      <label>Do not include a receipt in the package</label>
                    </div>
                  </div>
                </div>
                <div className="ui button primary" tabIndex="0">
                  Submit Order
                </div>
              </form>
            </div>
          )}
        </FormContext.Consumer>

        <div className="column">
          <Logger />
        </div>
      </div>
    );
  }
}

export default Page('Some form samples')(FormPage);

const ShippingFormTemplate = {
  'first-name': { value: '', errors: [], touched: false },
};
