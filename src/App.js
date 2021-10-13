import React from 'react';
import './App.css';
import './background.css';
import Cover from './components/cover_page';
import Footer from './components/footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Cover} />
          <Route path="/about-me" component={Content} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
