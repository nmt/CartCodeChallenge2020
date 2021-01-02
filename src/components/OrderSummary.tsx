import React from 'react';
import OrderSummaryItem from './OrderSummaryItem';

interface OrderSummaryProps {
  items: Array<Object>,
};

class OrderSummary extends React.Component<OrderSummaryProps, {}> {
  render() {
    return (
      <div id="orderSummary">
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
              items={this.props.items}
            />
            <OrderSummaryItem
              id="premiumAd"
              name="Premium Ad"
              type="premium"
              items={this.props.items}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default OrderSummary;