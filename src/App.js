import './App.css';
import React from 'react';

class App extends React.Component {
  // A class to handle the view.
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
    changeColors();
    // Generate random quote and set state.
    let randomIndex = Math.floor(Math.random() * this.quotesObj.length);
    let newQuote = this.quotesObj[randomIndex];
    this.setState({
      text: newQuote.text,
      author: newQuote.author
    });
  }

  render() {
    // Render view.
    return (
    <div id='quote-box' className='card bg-warning'>
      <div className='card-header'>
        <h2><b>Quote Generator</b></h2>
      </div>
      <br />
      <div className='card-body'>
        <blockquote className='blockquote'>
          <p id='text' className='lead'><strong>{this.state.text}</strong></p>
          <footer className="blockquote-footer">
            <cite id='author'>
              {this.state.author ? this.state.author: 'Unknown'}
            </cite>
          </footer>
        </blockquote>
      </div>
      <div className='card-footer'>
        <a id='tweet-quote'href='twitter.com/intent/tweet' className='float-left' target='_blank'>
          <i class="fa fa-3x fa-twitter" />
        </a>
        <button id='new-quote' className='btn btn-success float-right' onClick={this.newQuote}>Generate</button>
      </div>
    </div>
    );
  }
}
export default App;
