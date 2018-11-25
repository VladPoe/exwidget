import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import CommonButton from './../CommonButton';

test('CommonButton renders the text inside it', () => {
  const text = "i'm button";
  const wrapper = mount(
    <CommonButton text={text} type="button" />
  );
  const btn = wrapper.find('.btn');
  expect(btn.text()).toBe(text);
});


it('CommonButton renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommonButton text="Home" type="button" />, div);
});