import React from 'react';
const url = 'https://www.coffeecompany.com.au/coffee/organic-coffee';
const iframeStyle = {
  border: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

const App = () => (
  <div>
    <p>Hello Coffee Automation! From App!</p>
    <button onClick={()=>alert('does nothing for now!')}>Click me to order your 1kg of coffee!</button>
    <iframe src={url} style={iframeStyle}>Sorry, your browser does not support our technology!</iframe>
  </div>
);

export default App;
