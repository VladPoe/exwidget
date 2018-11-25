import React from 'react';
import ReactDOM from 'react-dom';
import { mount, render } from 'enzyme';
import { expect } from 'chai';
import Navigation from './../index';
import userData from './../../../constants/userData';

const currencies = userData.account;

test('Navigation length of items', () => {
  const wrapper = mount(
    <Navigation userCurrencies={currencies} currentCurrency="EUR" />
  );
  expect(wrapper.find('.list').children()).to.have.lengthOf(Object.keys(currencies).length);
});


it('Navigation renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigation userCurrencies={currencies} currentCurrency="EUR" />, div);
});