import React from 'react';
import './css/App.css';
import Profile from './components/Profile';
import OrderSummary from './components/OrderSummary';
import GrandTotal from './components/GrandTotal';

type state = {};

class App extends React.Component<{}, state> {
  constructor(props: Object) {
    super(props);

    this.profileChange = this.profileChange.bind(this);

    this.state = {
      profile: '',
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
        <OrderSummary />
        <GrandTotal />
      </div>
    );
  }
}

export default App;
