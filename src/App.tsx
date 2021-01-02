import React from 'react';
import './css/App.css';
import Profile from './components/Profile';
import OrderSummary from './components/OrderSummary';
import GrandTotal from './components/GrandTotal';
import SPECIAL_PRICING from './helpers/specialPricingRules';

type state = {
  profile: string,
  items: Array<Item>,
};

interface Item {
  name: string,
  quantity: number,
  price: number,
  specialPrice: number,
}

interface PricingRule {
  appliesTo: string,
  type: string,
  specialPrice?: number,
  buy?: number,
  get?: number,
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
          specialPrice: -1,
        },
        {
          name: 'standOut',
          quantity: 0,
          price: 32299,
          specialPrice: -1,
        },
        {
          name: 'premium',
          quantity: 0,
          price: 39499,
          specialPrice: -1,
        }],
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
    const index = this.state.items.findIndex(item => item.name === type);

    const customerSpecialPricing = SPECIAL_PRICING.filter(function(rule) { return (rule.customerName === type) })

    let specialPrice;

    if (customerSpecialPricing) {
      this.applySpecialPricing(customerSpecialPricing[0].rules)
      // set specialPrice
    }

    // const newSpecialPrice = this.state.items[index].specialPrice !== -1 ? this.state.items[index].specialPrice : this.state.items[index].price;
    // let newArray = [...this.state.items];
    // newArray[index] = {...newArray[index], specialPrice: newSpecialPrice}

    // this.setState({
    //   items: newArray,
    // })
  }

  applySpecialPricing(rules: Array<PricingRule>) {
    for (let i = 0; i < rules.length; i++) {
      switch (rules[i].type){
        case 'discount':
          // Special price is applied
          return 0;
        case 'bogo':
          return 0;
        default:
          return 0;
      }
    }
  }

  render() {
    return (
      <div id="main">
        <Profile
          onProfileChange={this.profileChange}
        />
        <OrderSummary
          onQuantityChange={this.quantityChange}
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
