import React from 'react';
import './css/App.css';
import Profile from './components/Profile';
import OrderSummary from './components/OrderSummary';
import GrandTotal from './components/GrandTotal';

type state = {
  profile: string,
  items: Array<Object>,
};

class App extends React.Component<{}, state> {
  constructor(props: Object) {
    super(props);

    this.profileChange = this.profileChange.bind(this);

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
