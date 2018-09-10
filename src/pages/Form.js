import React from 'react';
import Page from '../hoc/page';
import FormInput from '../components/Form/FormInput';
import FormSelect from '../components/Form/FormSelect';
import CountryList from '../enum/CountryList';
import MonthList from '../enum/MonthList';

const FormPage = () => {
  return (
    <div className="ui two column stackable grid">
      <div className="column">
        <form className="ui form">
          <h4 className="ui dividing header">Shipping Information</h4>
          <div className="field">
            <label>Name</label>
            <div className="two fields">
              <div className="field">
                <FormInput type="text" name="shipping[first-name]" placeholder="First Name" />
              </div>
              <div className="field">
                <FormInput type="text" name="shipping[last-name]" placeholder="Last Name" />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Billing Address</label>
            <div className="fields">
              <div className="twelve wide field">
                <FormInput type="text" name="shipping[address]" placeholder="Street Address" />
              </div>
              <div className="four wide field">
                <FormInput type="text" name="shipping[address-2]" placeholder="Apt #" />
              </div>
            </div>
          </div>
          <div className="fields">
            <div className="twelve wide field">
              <FormSelect name={'CountryList'} options={CountryList} label={'Select a country'} />
            </div>
          </div>
          <h4 className="ui dividing header">Billing Information</h4>
          <div className="field">
            <label>Card Type</label>
            <div className="ui selection dropdown">
              <FormInput type="hidden" name="card[type]" />
              <div className="default text">Type</div>
              <i className="dropdown icon" />
              <div className="menu">
                <div className="item" data-value="visa">
                  <i className="visa icon" />
                  Visa
                </div>
                <div className="item" data-value="amex">
                  <i className="amex icon" />
                  American Express
                </div>
                <div className="item" data-value="discover">
                  <i className="discover icon" />
                  Discover
                </div>
              </div>
            </div>
          </div>
          <div className="fields">
            <div className="seven wide field">
              <label>Card Number</label>
              <FormInput type="text" name="card[number]" maxLength="16" placeholder="Card #" />
            </div>
            <div className="three wide field">
              <label>CVC</label>
              <FormInput type="text" name="card[cvc]" maxLength="3" placeholder="CVC" />
            </div>
            <div className="six wide field">
              <label>Expiration</label>
              <div className="two fields">
                <div className="field">
                  <FormSelect name={'expire-month'} options={MonthList} />
                </div>
                <div className="field">
                  <FormInput type="text" name="card[expire-year]" maxLength="4" placeholder="Year" />
                </div>
              </div>
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
      <div className="column">Second Form</div>
    </div>
  );
};

export default Page('Some form samples')(FormPage);
