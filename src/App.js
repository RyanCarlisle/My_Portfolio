import React from 'react';
import './App.css';
import Cover from './components/cover_page';
import Footer from './components/footer';
import Background from './components/background';

function App() {
  return (
    <div className="App">
      <Background/>
      <Cover/>
      <Footer/>
      
    </div>
  );
}

export default App;
