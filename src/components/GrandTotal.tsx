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
    return total;
  }

  calculateTotal() {
    const items = this.props.items;
    const total = items.reduce(function(runningTotal: number, item: any) {
      return runningTotal + item.subtotal;
    }, 0)
    return total;
  }

  render() {
    const normalPrice = this.calculateTotalBeforeDiscount();
    const discountedPrice = this.calculateTotal();
    const savings = normalPrice - discountedPrice;

    if (normalPrice === discountedPrice) {
      return (
        <div id="grandTotal">
          <p><span className="gtLabel">Grand total: </span><span className="rightAlign">{formatPrice(discountedPrice)}</span></p>
        </div>
      );
    }
    else {
      return (
        <div id="grandTotal">
          <p><span className="gtLabel">Total before discount: </span><span className="rightAlign">{formatPrice(normalPrice)}</span></p>
          <p><span className="gtLabel">Savings: </span><span className="rightAlign">{formatPrice(savings)}</span></p>
          <p><span className="gtLabel">Grand total: </span><span className="rightAlign">{formatPrice(discountedPrice)}</span></p>
        </div>
      );
    }

  }
}

export default GrandTotal;