import React from 'react';
import OrderSummaryItem from './OrderSummaryItem';

interface OrderSummaryProps {
  items: Array<Item>,
  onQuantityChange: Function,
};

interface Item {
  quantity: number,
  price: number,
}

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
            {/* TODO: Generate items programmatically */}
            <OrderSummaryItem
              id="classicAd"
              name="Classic Ad"
              type="classic"
              item={this.props.items[0]}
              onQuantityChange={this.props.onQuantityChange}
            />
            <OrderSummaryItem
              id="standOutAd"
              name="Stand Out Ad"
              type="standOut"
              item={this.props.items[1]}
              onQuantityChange={this.props.onQuantityChange}
            />
            <OrderSummaryItem
              id="premiumAd"
              name="Premium Ad"
              type="premium"
              item={this.props.items[2]}
              onQuantityChange={this.props.onQuantityChange}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default OrderSummary;