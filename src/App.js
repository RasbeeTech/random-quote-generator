import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div id='quote-box' className='Title'>
      <h1>Random Quote Generator</h1>
      <DisplayQuote />
      <button id='new-quote'>Generate</button>
      <a id='tweet-quote'>Tweet-quote</a>
    </div>
  );
}

 class DisplayQuote extends React.Component{
   constructor(props){
    super(props);
    this.state = {};
   }
   render() {
    return(
      <div>
        <p id='text'>text</p>
        <p id='author'>author</p>
      </div>
    );
   }
 }

export default App;
