import React from 'react';
import { formatPrice } from '../helperFunctions';

interface GrandTotalProps {
  items: Array<Object>,
}

class GrandTotal extends React.Component<GrandTotalProps, {}> {
  calculateTotal() {
    const items = this.props.items;
    const total = items.reduce(function(runningTotal: number, item: any) {
      return runningTotal + item.quantity * item.price;
    }, 0)
    return formatPrice(total);
  }

  render() {
    return (
      <div id="grandTotal">
        Grand total: {this.calculateTotal()}
      </div>
    );
  }
}

export default GrandTotal;