import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.quotesObj = {};
    this.state = {
      text: '',
      author: ''
    };
    this.newQuote = this.newQuote.bind(this);
  }

  componentWillMount() {
    // Load quotes into object variable and set state.
    fetch("https://type.fit/api/quotes")
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.quotesObj=data;
    }).then(()=>{
      this.newQuote();
    });
  }

  newQuote(){
    // Generate random quote and set state.
    let randomIndex = Math.floor(Math.random() * this.quotesObj.length);
    let newQuote = this.quotesObj[randomIndex];
    this.setState({
      text: newQuote.text,
      author: newQuote.author
    });
  }

  render() {
    return (
    <div id='quote-box'>
      <h1>Random Quote Generator</h1>
      <p id='text'>{this.state.text}</p>
      <p id='author'>- {this.state.author}</p>
      <button id='new-quote' onClick={this.newQuote}>Generate</button>
      <br />
      <a id='tweet-quote' href='twitter.com/intent/tweet' target='_blank'>Tweet-quote</a>
    </div>
    );
  }
}
export default App;
