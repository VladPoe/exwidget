import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import ErrorScreen from './../ErrorScreen';

test('ErrorScreen renders the text inside it', () => {
  const message = 'Here we sign an error reason';
  const wrapper = mount(
    <ErrorScreen message={message} buttonText="Home" />
  );
  const p = wrapper.find('.message');
  expect(p.text()).toBe(message);
});


it('ErrorScreen renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorScreen buttonText="Home" />, div);
});