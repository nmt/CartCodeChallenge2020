import {
  Text,
  Columns,
  Column,
} from 'braid-design-system';
import React from 'react';

import { formatPrice } from '../../helpers/helperFunctions';
import { PricingRule, DISCOUNT_STRING } from '../../helpers/specialPricingRules';

import { Item } from './../Main';
import QuantityPicker from './QuantityPicker';

interface OrderSummaryItemProps {
  id: string,
  name: string,
  type: string,
  item: Item,
  rules: Array<PricingRule>,
  onQuantityChange: Function,
}

class OrderSummaryItem extends React.Component<OrderSummaryItemProps, {}> {
  // Returns updated values (if any) from any special pricing rules for both item price and subtotal
  calculateSubtotal(item: Item, quantity: number) {
    const rules = this.props.rules;

    // Ensure the rule applies for this product and is only a 'discount' type
    const relevantRule = rules.find(rule => rule.appliesTo === this.props.type && rule.type === DISCOUNT_STRING);
    const newPrice = relevantRule?.details.specialPrice;
    const pricePerItem = newPrice ? newPrice : item.price;
    const subtotal = quantity * pricePerItem;

    return { pricePerItem, subtotal };
  }

  render() {
    const { id, name, type, item, onQuantityChange } = this.props;
    const quantity = item.quantity;
    const displayValues = this.calculateSubtotal(item, quantity);

    return (
      <Columns space="small">
        <Column width="1/5"><Text>{name}</Text></Column>
        <Column width="1/5">
          <QuantityPicker
            id={id}
            type={type}
            item={item}
            quantity={quantity}
            onQuantityChange={onQuantityChange}
          />
        </Column>
        <Column width="1/5"><Text>{formatPrice(displayValues.pricePerItem)}</Text></Column>
        <Column width="1/5"><Text>{formatPrice(displayValues.subtotal)}</Text></Column>
      </Columns>
    )
  }
}

export default OrderSummaryItem;