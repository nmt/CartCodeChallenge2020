import React from 'react';
import QuantityPicker from './QuantityPicker';
import { formatPrice } from '../helperFunctions';

interface OrderSummaryItemProps {
  id: string,
  name: string,
  type: string,
  items: Array<Object>,
}

class OrderSummaryItem extends React.Component<OrderSummaryItemProps, {}> {
  render() {
    const items = this.props.items;
    const type = this.props.type;
    const item: any = items.filter(function(item: any) { return (item.name === type) });
    const quantity = item[0] ? item[0].quantity : 0;
    const pricePerItem = item[0] ? item[0].price : 0;
    const subtotal = quantity * pricePerItem;
  
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>
          <QuantityPicker
            id={this.props.id}
            type={this.props.type}
            items={this.props.items}
          />
        </td>
        <td>{formatPrice(pricePerItem)}</td>
        <td>{formatPrice(subtotal)}</td>
      </tr>
    )
  }
}

export default OrderSummaryItem;