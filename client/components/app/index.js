import React, { Component } from 'react';

const url = 'https://www.coffeecompany.com.au/coffee/organic-coffee';
const iframesUnsupportedMsg = 'Sorry, your browser does not support our technology!';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadWebsite: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.renderIframe = this.renderIframe.bind(this);
  }

  handleClick() {
    this.setState({
      loadWebsite: true,
    });
  }

  renderButton() {
    return (
      <div>
        <p>Hello Coffee Automation! From App Component!</p>
        <button onClick={this.handleClick}>Click me to order your 1kg of coffee!</button>
      </div>
    );
  }

  renderIframe() {
    const testAutomationHandler = (iframe) => {
      const innerWindow = iframe.contentWindow || iframe.contentDocument;
      // console.log('testAutomationHandler got invoked!');
      // const quickOrderBtn = innerWindow.querySelector('span[data-modal-id="636"]');
      // console.log(quickOrderBtn); 
      // quickOrderBtn.click();
    };

    return (
      <iframe src={url} style={iframeStyle} ref={testAutomationHandler}>{iframesUnsupportedMsg}</iframe>
      // check in componentdidmount if state.loadwebsite = true; if yes, invoke helpers. (can you check state in
      // componentdidmount lifecycle?)
    );
  }

  render() {
    const { loadWebsite } = this.state;
    if (loadWebsite) {
      return this.renderIframe();
    }
    return this.renderButton();
  }
};

export default App;
