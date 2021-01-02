import React from 'react';
import { formatPrice } from '../helpers/helperFunctions';

interface GrandTotalProps {
  items: Array<Object>,
}

type GrandTotalState = {
  hasDiscount: boolean,
}

class GrandTotal extends React.Component<GrandTotalProps, GrandTotalState> {
  constructor(props: any) {
    super(props);

    this.state = {
      hasDiscount: false,
    }
  }

  calculateTotalBeforeDiscount() {
    const items = this.props.items;
    const total = items.reduce(function(runningTotal: number, item: any) {
      return runningTotal + item.quantity * item.price;
    }, 0)
    return formatPrice(total);
  }

  calculateTotal() {
    const items = this.props.items;
    const total = items.reduce(function(runningTotal: number, item: any) {
      return runningTotal + item.subtotal;
    }, 0)
    return formatPrice(total);
  }

  render() {
    return (
      <div id="grandTotal">
        {/* TODO: Conditional rendering */}
        <p>Total before discount: {this.calculateTotalBeforeDiscount()}</p>
        <p>Grand total: {this.calculateTotal()}</p>
        {/* TODO: "You saved $XXX.XX!" */}
      </div>
    );
  }
}

export default GrandTotal;