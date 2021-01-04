import {
  Box,
  Heading,
  Text,
  Strong,
  Card,
  Stack,
} from 'braid-design-system';
import React from 'react';

import { PRICING_RULES, DISCOUNT_STRING, BOGO_STRING, PricingRule } from '../helpers/specialPricingRules';

import GrandTotal from './components/GrandTotal';
import OrderSummary from './components/OrderSummary';
import Profile from './components/Profile';

type state = {
  profile: string,
  items: Array<Item>,
  rules: Array<PricingRule>,
};

interface Item {
  name: string,
  quantity: number,
  price: number,
  subtotal: number,
}

class Main extends React.Component<{}, state> {
  constructor(props: any) {
    super(props);

    this.profileChange = this.profileChange.bind(this);
    this.applyPricingRules = this.applyPricingRules.bind(this);
    this.quantityChange = this.quantityChange.bind(this);

    this.state = {
      profile: '',
      items: [
        {
          name: 'classic',
          quantity: 0,
          price: 26999,
          subtotal: 0,
        },
        {
          name: 'standOut',
          quantity: 0,
          price: 32299,
          subtotal: 0,
        },
        {
          name: 'premium',
          quantity: 0,
          price: 39499,
          subtotal: 0,
        }],
      rules: [],
    };
  }

  applyPricingRules(item: Item, type: string, newQty: number) {
    const rules = this.state.rules;

    // Discount rule
    let relevantRule = rules.find(rule => rule.appliesTo === type && rule.type === DISCOUNT_STRING);
    const newPrice = relevantRule?.details.specialPrice;
    const pricePerItem = newPrice ? newPrice : item.price;
    let newSubtotal = newQty * pricePerItem;

    // BOGO rule
    let amountToDiscountFromBOGO = 0;
    relevantRule = rules.find(rule => rule.appliesTo === type && rule.type === BOGO_STRING);
    if (relevantRule) {
      const buy = relevantRule.details.buy;
      const get = relevantRule.details.get;
      const difference = get - buy;

      const numberOfSets = Math.floor(newQty / get);
      amountToDiscountFromBOGO = difference * numberOfSets * pricePerItem;
    }
    newSubtotal = newSubtotal - amountToDiscountFromBOGO;

    return newSubtotal;
  }

  quantityChange(type: string, newQty: number) {
    const index = this.state.items.findIndex(item => item.name === type);
    const item = this.state.items[index];
    const updatedItems = [...this.state.items];

    const newSubtotal = this.applyPricingRules(item, type, newQty);

    updatedItems[index] = { ...updatedItems[index], quantity: newQty };
    updatedItems[index] = { ...updatedItems[index], subtotal: newSubtotal };

    this.setState({
      items: updatedItems,
    })
  }

  profileChange(type: string) {
    // Pricing rules change according to the profile
    const index = PRICING_RULES.findIndex(rule => rule.customerName === type);
    const updatedRules = index >= 0 ? PRICING_RULES[index].rules : [];

    const updatedItems = [...this.state.items];
    for (let i = 0; i < updatedItems.length; i++) {
      updatedItems[i] = { ...updatedItems[i], quantity: 0 };
      updatedItems[i] = { ...updatedItems[i], subtotal: 0 };
    }

    this.setState({
      profile: type,
      items: updatedItems,
      rules: updatedRules,
    })
  }

  render() {
    return (
      <Stack space="medium">
        <Box background="brand" paddingY="xxlarge" paddingX="gutter">
          <Stack space="medium">
            <Heading level="1">Your cart</Heading>
            <Text>
              <Strong>First,</Strong> select a profile.<br />
              <Strong>Then,</Strong> add or remove items and see the total change!
          </Text>
          </Stack>
        </Box>
        <Box paddingX={['xsmall', 'gutter']} style={{ marginTop: '-40px' }}>
          <Card>
            <Stack space="medium">
              <Stack space="large" dividers>
                <Profile
                  onProfileChange={this.profileChange}
                />
                <OrderSummary
                  onQuantityChange={this.quantityChange}
                  rules={this.state.rules}
                  items={this.state.items}
                />
                <GrandTotal
                  items={this.state.items}
                />
              </Stack>
            </Stack>
          </Card>
        </Box>
      </Stack>
    );
  }
}

export default Main;
export type { Item };
