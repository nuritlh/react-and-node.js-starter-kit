import React, { useState } from 'react';
import axios from 'axios';

import './App.css';
import logo from './logo.svg';

const App = () => {
  const [name, setName] = useState();

  const handleChange = (event) => {
    setName( event.target.value );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3002/api', {name
    }).then((res) => {
      console.log('hello', res.data.name);
      return res.data;
    })
  };

    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <form onSubmit={ handleSubmit }>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              onChange={ handleChange }
            />
            <button type="submit">Submit</button>
          </form>
          <p>{ name }</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
};

export default App;
