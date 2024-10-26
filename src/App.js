import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Fragment } from 'react';
import Navs  from './components/Navs/Navs.js';

function App() {
  return (
    <Fragment>
      <Navs />

      <Home />
      
    </Fragment>
   
  );
}

export default App;
