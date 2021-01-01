import React from 'react';

class OrderSummary extends React.Component {
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
            <tr>
              <td>Classic Ad</td>
              <td>2</td>
              <td>$269.99</td>
              <td>$539.98</td>
            </tr>
            <tr>
              <td>Premium Ad</td>
              <td>1</td>
              <td>$322.99</td>
              <td>$322.99</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default OrderSummary;