import React from 'react';

import OrderSummaryItem from './OrderSummaryItem';

import { PricingRule } from '../../helpers/specialPricingRules';

import { Item } from '../App';

interface OrderSummaryProps {
  items: Array<Item>,
  rules: Array<PricingRule>,
  onQuantityChange: Function,
};

class OrderSummary extends React.Component<OrderSummaryProps, {}> {
  render() {
    const { items, rules, onQuantityChange } = this.props;

    return (
      <div id="orderSummary" className="orderSummary">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            <OrderSummaryItem
              id="classicAd"
              name="Classic Ad"
              type="classic"
              item={items[0]}
              rules={rules}
              onQuantityChange={onQuantityChange}
            />
            <OrderSummaryItem
              id="standOutAd"
              name="Stand Out Ad"
              type="standOut"
              item={items[1]}
              rules={rules}
              onQuantityChange={onQuantityChange}
            />
            <OrderSummaryItem
              id="premiumAd"
              name="Premium Ad"
              type="premium"
              item={items[2]}
              rules={rules}
              onQuantityChange={onQuantityChange}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default OrderSummary;