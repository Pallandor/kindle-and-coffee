import React from 'react';
import * as helpers from '../../helpers';

const App = () => (
  <div>
    <h3>Welcome to Kindle & Coffee</h3>
    <button onClick={helpers.redirectTo('http://localhost:3000/getcoffee')}>Click me to order your 1kg of coffee!</button>
  </div>
);

export default App; 
