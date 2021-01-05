import {
  Box,
  Text,
  Strong,
  Columns,
  Column,
} from 'braid-design-system';
import React from 'react';

import { Item } from '../../helpers/inventory';
import { PricingRule } from '../../helpers/specialPricingRules';

import OrderSummaryItem from './OrderSummaryItem';

interface OrderSummaryProps {
  items: Array<Item>,
  rules: Array<PricingRule>,
  onQuantityChange: Function,
};

class OrderSummary extends React.Component<OrderSummaryProps, {}> {
  render() {
    const { items, rules, onQuantityChange } = this.props;

    return (
      <Box id="orderSummary" className="orderSummary">
        <Box paddingBottom="gutter">
          <Columns space="small">
            <Column width="1/5">
              <Text><Strong>Name</Strong></Text>
            </Column>
            <Column width="1/5">
              <Text><Strong>Quantity</Strong></Text>
            </Column>
            <Column width="1/5">
              <Text><Strong>Price</Strong></Text>
            </Column>
            <Column width="1/5">
              <Text><Strong>Total</Strong></Text>
            </Column>
          </Columns>
        </Box>
        <Box paddingBottom="gutter">
          <OrderSummaryItem
            id="classicAd"
            name="Classic Ad"
            type="classic"
            item={items[0]}
            rules={rules}
            onQuantityChange={onQuantityChange}
          />
        </Box>
        <Box paddingBottom="gutter">
          <OrderSummaryItem
            id="standOutAd"
            name="Stand Out Ad"
            type="standOut"
            item={items[1]}
            rules={rules}
            onQuantityChange={onQuantityChange}
          />
        </Box>
        <Box paddingBottom="gutter">
          <OrderSummaryItem
            id="premiumAd"
            name="Premium Ad"
            type="premium"
            item={items[2]}
            rules={rules}
            onQuantityChange={onQuantityChange}
          />
        </Box>
      </Box>
    );
  }
}

export default OrderSummary;
