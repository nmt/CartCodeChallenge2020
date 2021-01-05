import React from 'react';
import QuantityPicker from './QuantityPicker';
import { formatPrice } from '../helpers/helperFunctions';
import { PricingRule, DISCOUNT_STRING } from '../helpers/specialPricingRules';
import { Item } from './../App';

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
      <tr id={id}>
        <td>{name}</td>
        <td>
          <QuantityPicker
            id={id}
            type={type}
            item={item}
            quantity={quantity}
            onQuantityChange={onQuantityChange}
          />
        </td>
        <td>{formatPrice(displayValues.pricePerItem)}</td>
        <td className="orderSummaryItemSubtotal">{formatPrice(displayValues.subtotal)}</td>
      </tr>
    )
  }
}

export default OrderSummaryItem;