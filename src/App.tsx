import React from 'react';
import './css/App.css';
import Profile from './components/Profile';
import OrderSummary from './components/OrderSummary';
import GrandTotal from './components/GrandTotal';

type state = {
  profile: string,
  items: Array<Item>,
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
          price: 26999
        },
        {
          name: 'standOut',
          quantity: 0,
          price: 32299
        },
        {
          name: 'premium',
          quantity: 0,
          price: 39499
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

  profileChange(e: any) {
    this.setState({
      profile: e.target.value,
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
