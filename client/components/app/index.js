import React from 'react';

const testClick = () => {
  alert('blah!'); 
};

const App = () => (
  <div>
    <p>Hello Coffee Automation! From App!</p>
    <button onClick={testClick}>Click me to order your 1kg of coffee!</button>
  </div>
);

export default App; 
