import React from 'react';
import { formatPrice } from '../helpers/helperFunctions';
import { Item } from '../helpers/inventory';

interface GrandTotalProps {
  items: Array<Item>,
}

class GrandTotal extends React.Component<GrandTotalProps, {}> {
  constructor(props: any) {
    super(props);
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
        <div id="grandTotalContainer">
          <p><span id="grandTotal" className="gtLabel">Grand total: </span><span className="rightAlign">{formatPrice(discountedPrice)}</span></p>
        </div>
      );
    }
    else {
      return (
        <div id="grandTotalContainer">
          <p><span id="totalBeforeDiscount" className="gtLabel">Total before discount: </span><span className="rightAlign">{formatPrice(normalPrice)}</span></p>
          <p><span id="savings" className="gtLabel">Savings: </span><span className="rightAlign">{formatPrice(savings)}</span></p>
          <p><span id="grandTotal" className="gtLabel">Grand total: </span><span className="rightAlign">{formatPrice(discountedPrice)}</span></p>
        </div>
      );
    }

  }
}

export default GrandTotal;