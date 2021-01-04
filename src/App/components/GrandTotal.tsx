import {
  Stack,
  Text,
  Strong,
} from 'braid-design-system';

import React from 'react';

import { formatPrice } from '../../helpers/helperFunctions';

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
    const total = items.reduce(function (runningTotal: number, item: any) {
      return runningTotal + item.quantity * item.price;
    }, 0)
    return total;
  }

  calculateTotal() {
    const items = this.props.items;
    const total = items.reduce(function (runningTotal: number, item: any) {
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
        <Stack id="grandTotal" space="medium">
          <Text><span className="gtLabel">Grand total: </span><Strong>{formatPrice(discountedPrice)}</Strong></Text>
        </Stack>
      );
    }
    return (
      <Stack id="grandTotal" space="medium">
        <Text><span className="gtLabel">Total before discount: </span><Strong>{formatPrice(normalPrice)}</Strong></Text>
        <Text><span className="gtLabel">Savings: </span><Strong>{formatPrice(savings)}</Strong></Text>
        <Text><span className="gtLabel">Grand total: </span><Strong>{formatPrice(discountedPrice)}</Strong></Text>
      </Stack>
    );
  }
}

export default GrandTotal;