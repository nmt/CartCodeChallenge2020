import React from 'react';
// @ts-ignore
import { StyleGuideProvider, Dropdown } from 'seek-style-guide/react';
import './css/App.css';
import Profile from './components/Profile';
import OrderSummary from './components/OrderSummary';
import GrandTotal from './components/GrandTotal';
import { PRICING_RULES, DISCOUNT_STRING, BOGO_STRING, PricingRule } from './helpers/specialPricingRules';

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

class App extends React.Component<{}, state> {
  constructor(props: Object) {
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
    let updatedItems = [...this.state.items];

    let newSubtotal = this.applyPricingRules(item, type, newQty);

    updatedItems[index] = { ...updatedItems[index], quantity: newQty };
    updatedItems[index] = { ...updatedItems[index], subtotal: newSubtotal };

    this.setState({
      items: updatedItems,
    })
  }

  profileChange(type: string) {
    // Pricing rules change according to the profile
    const index = PRICING_RULES.findIndex(rule => rule.customerName === type);
    let updatedRules = index >= 0 ? PRICING_RULES[index].rules : [];

    let updatedItems = [...this.state.items];
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
    const locale = 'AU';
    const title = '...';
    const meta = [{ name: 'description', content: '...' }];
    const link = [{ rel: 'canonical', href: 'https://www.seek.com.au/' }];

    return (
      <StyleGuideProvider locale={locale} title={title} meta={meta} link={link}>
        <Dropdown
          id="jobTitles"
          label="Job Titles"
          message=""
          onChange={function () { }}
          options={[
            {
              label: 'Really really long job title that is not gonna fit',
              value: '3'
            },
            {
              label: 'Major Cities',
              value: [
                {
                  label: 'Melbourne',
                  value: '3004'
                },
                {
                  label: 'Sydney',
                  value: '3002'
                }
              ]
            },
            {
              label: 'Ballarat',
              value: '3005'
            }
          ]}
          placeholder="Select a job title..."
          value="..."
        />
        <div id="main">
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
        </div>
      </StyleGuideProvider>
    );
  }
}

export default App;
export type { Item };
