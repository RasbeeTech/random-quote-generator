import logo from './logo.svg';
import './App.css';
import React from 'react';

const QUOTE = {
  text: '',
  author: ''
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      auther: ''
    };
  }
  render() {
    return (
    <div id='quote-box'>
      <h1>Random Quote Generator</h1>
      <DisplayQuote />
      <button id='new-quote'>Generate</button>
      <br />
      <a id='tweet-quote' href='twitter.com/intent/tweet' target='_blank'>Tweet-quote</a>
    </div>
    );
  }
}

function DisplayQuote(){
  return(
    <div id='quote'>
      <p id='text'>text</p>
      <p id='author'>author</p>
    </div>
  );
}

export default App;
