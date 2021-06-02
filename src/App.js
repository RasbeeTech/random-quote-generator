import logo from './logo.svg';
import './App.css';
import React from 'react';

let currentQuote = {
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
    this.generateQuote = this.generateQuote.bind(this);
  }
  generateQuote(){
    this.setState({
      text: 'Hello',
      auther: '-Me'
    });
  }
  render() {
    return (
    <div id='quote-box' className='container center'>
      <h1>Random Quote Generator</h1>
      <DisplayQuote text={this.state.text} auther={this.state.auther}/>
      <button id='new-quote' onClick={this.generateQuote}>Generate</button>
      <br />
      <a id='tweet-quote' href='twitter.com/intent/tweet' target='_blank'>Tweet-quote</a>
    </div>
    );
  }
}

function DisplayQuote(props){
  return(
    <div id='quote'>
      <p id='text'>{props.text}</p>
      <p id='author'>{props.auther}</p>
    </div>
  );
}

export default App;
