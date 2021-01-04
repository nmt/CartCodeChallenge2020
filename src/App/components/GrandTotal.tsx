import {
  Stack,
  Text,
  Strong,
  Columns,
  Column,
} from 'braid-design-system';
import React, { Fragment } from 'react';

import { formatPrice } from '../../helpers/helperFunctions';
import { Item } from '../Main';

interface GrandTotalProps {
  items: Array<Item>,
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
        <Stack space="medium">
          <Columns space="small">
            <Column><Text align="right">Grand total: </Text></Column>
            <Column><Text><Strong>{formatPrice(discountedPrice)}</Strong></Text></Column>
          </Columns>
        </Stack>
      );
    }
    return (
      <Stack space="medium">
        <Columns space="small">
          <Column><Text align="right">Total before discount: </Text></Column>
          <Column><Text><Strong>{formatPrice(normalPrice)}</Strong></Text></Column>
        </Columns>
        <Columns space="small">
          <Column><Text align="right">Savings: </Text></Column>
          <Column><Text><Strong>{formatPrice(savings)}</Strong></Text></Column>
        </Columns>
        <Columns space="small">
          <Column><Text align="right">Grand total: </Text></Column>
          <Column><Text><Strong>{formatPrice(discountedPrice)}</Strong></Text></Column>
        </Columns>
      </Stack>
    );
  }
}

export default GrandTotal;