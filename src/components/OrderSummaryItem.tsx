import React from 'react';
import QuantityPicker from './QuantityPicker';
import { formatPrice } from '../helpers/helperFunctions';

interface OrderSummaryItemProps {
  id: string,
  name: string,
  type: string,
  item: Item,
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
    const pricePerItem = item.price;
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
        <td>{formatPrice(subtotal)}</td>
      </tr>
    )
  }
}

export default OrderSummaryItem;