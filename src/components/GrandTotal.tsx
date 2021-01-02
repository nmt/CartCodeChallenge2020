import React from 'react';

interface GrandTotalProps {
  items: Array<Object>,
}

class GrandTotal extends React.Component<GrandTotalProps, {}> {
  calculateTotal() {
    console.log(this.props.items);
    const items = this.props.items;
    const total = items.reduce(function(runningTotal: number, item: any) {
      return runningTotal + item.quantity * item.price;
    }, 0)
    return this.formatPrice(total);
  }

  formatPrice(cents: number) {
    return '$' + cents/100;
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