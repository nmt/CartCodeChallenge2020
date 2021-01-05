import React from 'react';
import { shallow, mount } from 'enzyme';
import Profile from './components/Profile';
import QuantityPicker from './components/QuantityPicker';

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
  const itemProp = {"name":"classic","quantity":0,"price":26999,"subtotal":0};
  const qp = shallow(<QuantityPicker id="testQp" type="classic" quantity={0} item={itemProp} />);
  expect(qp.text()).toEqual('0+-');
  qp.find('.increaseButton').simulate('click');
  expect(qp.text()).toEqual('1+-');
});

test('Quantity Picker component decreases quantity', () => {
  const itemProp = {"name":"classic","quantity":0,"price":26999,"subtotal":0};
  const qp = shallow(<QuantityPicker id="testQp" type="classic" quantity={0} item={itemProp} />);
  expect(qp.text()).toEqual('0+-');
  qp.find('.increaseButton').simulate('click');
  expect(qp.text()).toEqual('1+-');
  qp.find('.decreaseButton').simulate('click');
  expect(qp.text()).toEqual('0+-');
});

test('Quantity Picker component does not decrease quantity past 0', () => {
  const itemProp = {"name":"classic","quantity":0,"price":26999,"subtotal":0};
  const qp = shallow(<QuantityPicker id="testQp" type="classic" quantity={0} item={itemProp} />);
  expect(qp.text()).toEqual('0+-');
  qp.find('.increaseButton').simulate('click');
  expect(qp.text()).toEqual('1+-');
  qp.find('.decreaseButton').simulate('click');
  expect(qp.text()).toEqual('0+-');
  qp.find('.decreaseButton').simulate('click');
  expect(qp.text()).toEqual('0+-');
});
