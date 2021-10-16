import React, {useState, useEffect} from 'react';
import './App.css';
import './background.css';
import Cover from './components/cover_page';
import Footer from './components/footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Content from './components/Content';
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])

  return (
    <div className="App">
      {
        loading ? (
          <div className="preloader">
            <HashLoader color={'#fff'} loading={loading} size={55} /> 
          </div>
          )
        : (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Cover} />
              <Route path="/about-me" component={Content} />
            </Switch>
            <Footer/>
          </BrowserRouter>
          )
      }
    </div>
  );
}

export default App;
