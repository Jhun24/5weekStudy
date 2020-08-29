import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';

import Post from './components/post/post';
import View from './components/view/view';
import Header from './components/header/header';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Route exact path="/" component={Post}/>
        <Route path="/view" component={View}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
