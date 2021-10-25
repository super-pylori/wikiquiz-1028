import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data.json'; // 追加

const wikiList = Data.data.wiki;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {wikiList[0].text}
        </p>
        <a
          className="App-link"
          href={wikiList[0].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          答えはこちら
        </a>
        <p>
          {wikiList[1].text}
        </p>
        <a
          className="App-link"
          href={wikiList[1].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          答えはこちら
        </a>
        <p>
          {wikiList[3].text}
        </p>
        <a
          className="App-link"
          href={wikiList[3].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          答えはこちら
        </a>
      </header>
    </div>
  );
}

export default App;
