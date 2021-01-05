import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import QuantityPicker from './components/QuantityPicker';
import renderer from 'react-test-renderer';

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

test('renders App snapshot', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders profile selector', () => {
  render(<App />);
  const linkElement = screen.getByText(/Select a profile/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders order summary table', () => {
  render(<App />);
  const linkElement = screen.getByRole(/table/);
  expect(linkElement).toBeInTheDocument();
});

test('renders grand total', () => {
  render(<App />);
  const linkElement = screen.getByText(/Grand total/i);
  expect(linkElement).toBeInTheDocument();
});
