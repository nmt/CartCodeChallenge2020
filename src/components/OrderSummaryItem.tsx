import React from 'react';
import QuantityPicker from './QuantityPicker';
import { formatPrice } from '../helpers/helperFunctions';
import { PricingRule, DISCOUNT_STRING } from '../helpers/specialPricingRules';

interface OrderSummaryItemProps {
  id: string,
  name: string,
  type: string,
  item: Item,
  rules: Array<PricingRule>,
  onQuantityChange: Function,
}

interface Item {
  quantity: number,
  price: number,
}

class OrderSummaryItem extends React.Component<OrderSummaryItemProps, {}> {
  render() {
    const item = this.props.item;
    const quantity = item.quantity;

    const rules = this.props.rules;
    // TODO: Make this more readable
    const relevantRule = rules.find(rule => rule.appliesTo === this.props.type && rule.type === DISCOUNT_STRING);
    const newPrice = relevantRule?.details.specialPrice;

    const pricePerItem = newPrice ? newPrice : item.price;
    const subtotal = quantity * pricePerItem;

    return (
      <tr>
        <td>{this.props.name}</td>
        <td>
          <QuantityPicker
            id={this.props.id}
            type={this.props.type}
            item={this.props.item}
            quantity={quantity}
            onQuantityChange={this.props.onQuantityChange}
          />
        </td>
        <td>{formatPrice(pricePerItem)}</td>
        <td className="orderSummaryItemSubtotal">{formatPrice(subtotal)}</td>
      </tr>
    )
  }
}

export default OrderSummaryItem;