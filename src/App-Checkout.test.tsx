import React from 'react';
import { mount } from 'enzyme';
import App from './App';

test('add 1x Classic to Default checkout', () => {
  const app = mount(<App />);
  expect(app.find('#grandTotal + span').text()).toEqual('A$0.00');
  app.find('#classicAdPicker .increaseButton').simulate('click');
  expect(app.find('#grandTotal + span').text()).toEqual('A$269.99');
});

test('add 1x Classic, 2x Standout, 3x Premium to Default checkout', () => {
  const app = mount(<App />);
  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#grandTotal + span').text()).toEqual('A$0.00');

  app.find('#classicAdPicker .increaseButton').simulate('click');
  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$269.99');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#grandTotal + span').text()).toEqual('A$269.99');

  app.find('#standOutAdPicker .increaseButton').simulate('click');
  app.find('#standOutAdPicker .increaseButton').simulate('click');
  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$269.99');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$645.98');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#grandTotal + span').text()).toEqual('A$915.97');

  app.find('#premiumAdPicker .increaseButton').simulate('click');
  app.find('#premiumAdPicker .increaseButton').simulate('click');
  app.find('#premiumAdPicker .increaseButton').simulate('click');
  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$269.99');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$645.98');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$1,184.97');
  expect(app.find('#grandTotal + span').text()).toEqual('A$2,100.94');
});

test('Myer checkout', () => {
  const app = mount(<App />);
  expect(app.state('profile')).toEqual('');
  app.find('select').simulate('change', { target: { value : 'myer' } });
  expect(app.state('profile')).toEqual('myer');

  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#grandTotal + span').text()).toEqual('A$0.00');

  for (let i = 0; i < 23; i++) {
    app.find('#classicAdPicker .increaseButton').simulate('click');
  }
  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$6,209.77');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#grandTotal + span').text()).toEqual('A$6,209.77');

  for (let i = 0; i < 54; i++) {
    app.find('#standOutAdPicker .increaseButton').simulate('click');
  }
  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$6,209.77');
  // BOGO rule doesn't display in subtotal, only applied before grand total
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$17,441.46');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#totalBeforeDiscount + span').text()).toEqual('A$23,651.23');
  expect(app.find('#savings + span').text()).toEqual('A$3,229.90');
  expect(app.find('#grandTotal + span').text()).toEqual('A$20,421.33');

  for (let i = 0; i < 41; i++) {
    app.find('#premiumAdPicker .increaseButton').simulate('click');
  }
  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$6,209.77');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$17,441.46');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$15,989.59');
  expect(app.find('#totalBeforeDiscount + span').text()).toEqual('A$39,845.82');
  expect(app.find('#savings + span').text()).toEqual('A$3,434.90');
  expect(app.find('#grandTotal + span').text()).toEqual('A$36,410.92');
});

test.only('Myer checkout Classic Ad discount', () => {
  const app = mount(<App />);
  expect(app.state('profile')).toEqual('');
  app.find('select').simulate('change', { target: { value : 'myer' } });
  expect(app.state('profile')).toEqual('myer');

  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#grandTotal + span').text()).toEqual('A$0.00');

  app.find('#classicAdPicker .increaseButton').simulate('click');
  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$269.99');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#grandTotal + span').text()).toEqual('A$269.99');

  app.find('#classicAdPicker .increaseButton').simulate('click');
  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$539.98');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#grandTotal + span').text()).toEqual('A$539.98');

  app.find('#classicAdPicker .increaseButton').simulate('click');
  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$809.97');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#totalBeforeDiscount + span').text()).toEqual('A$809.97');
  expect(app.find('#savings + span').text()).toEqual('A$60.00');
  expect(app.find('#grandTotal + span').text()).toEqual('A$749.97');
});

test.only('Jora checkout Premium Ad discount', () => {
  const app = mount(<App />);
  expect(app.state('profile')).toEqual('');
  app.find('select').simulate('change', { target: { value : 'jora' } });
  expect(app.state('profile')).toEqual('jora');

  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#grandTotal + span').text()).toEqual('A$0.00');

  app.find('#premiumAdPicker .increaseButton').simulate('click');
  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$394.99');
  expect(app.find('#grandTotal + span').text()).toEqual('A$394.99');

  app.find('#premiumAdPicker .increaseButton').simulate('click');
  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$789.98');
  expect(app.find('#grandTotal + span').text()).toEqual('A$789.98');

  app.find('#premiumAdPicker .increaseButton').simulate('click');
  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$1,184.97');
  expect(app.find('#grandTotal + span').text()).toEqual('A$1,184.97');

  app.find('#premiumAdPicker .increaseButton').simulate('click');
  expect(app.find('#classicAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#standOutAd .orderSummaryItemSubtotal').text()).toEqual('A$0.00');
  expect(app.find('#premiumAd .orderSummaryItemSubtotal').text()).toEqual('A$1,579.96');
  expect(app.find('#totalBeforeDiscount + span').text()).toEqual('A$1,579.96');
  expect(app.find('#savings + span').text()).toEqual('A$60.00');
  expect(app.find('#grandTotal + span').text()).toEqual('A$1,519.96');
});
