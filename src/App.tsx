import React from 'react';
import './css/App.css';
import Profile from './components/Profile';
import OrderSummary from './components/OrderSummary';
import GrandTotal from './components/GrandTotal';

function App() {
  return (
    <div id="main">
      <Profile />
      <OrderSummary />
      <GrandTotal />
    </div>
  );
}

export default App;
