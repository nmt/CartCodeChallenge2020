import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Profile from './components/Profile';

test('Profile component should have 4 options', () => {
  const profile = shallow(<Profile />);
  expect(profile.find('option')).toHaveLength(4);
});

test('Profile component should update its value when changed', () => {
  const profile = mount(<Profile />);
  expect(profile.state('profile')).toEqual('');
  profile.find('select').simulate('change', { target: { value : 'myer' } });
  expect(profile.state('profile')).toEqual('myer');
});

test('Quantity Picker component increases quantity', () => {
  const app = mount(<App />);
  expect(app.find('#classicAdPicker .quantityPickerText').text()).toEqual('0');
  app.find('#classicAdPicker .increaseButton').simulate('click');
  expect(app.find('#classicAdPicker .quantityPickerText').text()).toEqual('1');
});

test('Quantity Picker component decreases quantity', () => {
  const app = mount(<App />);
  expect(app.find('#classicAdPicker .quantityPickerText').text()).toEqual('0');
  app.find('#classicAdPicker .increaseButton').simulate('click');
  expect(app.find('#classicAdPicker .quantityPickerText').text()).toEqual('1');
  app.find('#classicAdPicker .decreaseButton').simulate('click');
  expect(app.find('#classicAdPicker .quantityPickerText').text()).toEqual('0');
});

test('Quantity Picker component does not decrease quantity past 0', () => {
  const app = mount(<App />);
  expect(app.find('#classicAdPicker .quantityPickerText').text()).toEqual('0');
  app.find('#classicAdPicker .increaseButton').simulate('click');
  expect(app.find('#classicAdPicker .quantityPickerText').text()).toEqual('1');
  app.find('#classicAdPicker .decreaseButton').simulate('click');
  expect(app.find('#classicAdPicker .quantityPickerText').text()).toEqual('0');
  app.find('#classicAdPicker .decreaseButton').simulate('click');
  expect(app.find('#classicAdPicker .quantityPickerText').text()).toEqual('0');
});
