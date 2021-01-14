import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { formatPrice } from './helpers/helperFunctions';

test.only('formatPrice formats a price in cents', () => {
  const testPriceInCents = 329999;
  expect(formatPrice(testPriceInCents)).toEqual('A$3,299.99');
});