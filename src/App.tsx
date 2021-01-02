import React from 'react';
import './css/App.css';
import Profile from './components/Profile';
import OrderSummary from './components/OrderSummary';
import GrandTotal from './components/GrandTotal';
import { PRICING_RULES, PricingRule } from './helpers/specialPricingRules';

type state = {
  profile: string,
  items: Array<Item>,
  rules: Array<PricingRule>,
};

interface Item {
  name: string,
  quantity: number,
  price: number,
}

class App extends React.Component<{}, state> {
  constructor(props: Object) {
    super(props);

    this.profileChange = this.profileChange.bind(this);
    this.quantityChange = this.quantityChange.bind(this);

    this.state = {
      profile: '',
      items: [
        {
          name: 'classic',
          quantity: 0,
          price: 26999,
        },
        {
          name: 'standOut',
          quantity: 0,
          price: 32299,
        },
        {
          name: 'premium',
          quantity: 0,
          price: 39499,
        }],
      rules: [],
    };
  }

  quantityChange(type: string, newQty: number) {
    const index = this.state.items.findIndex(item => item.name === type);
    let newArray = [...this.state.items];
    newArray[index] = {...newArray[index], quantity: newQty}

    this.setState({
      items: newArray,
    })
  }

  profileChange(type: string) {
    // Pricing rules change according to the profile
    const index = PRICING_RULES.findIndex(rule => rule.customerName === type);
    let updatedRules = index >= 0 ? PRICING_RULES[index].rules : [];

    this.setState({
      profile: type,
      rules: updatedRules,
    })
  }

  render() {
    return (
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
    );
  }
}

export default App;
