import React from 'react';

import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Header from './components/header/Header';
import Settings from './pages/settings/Settings';


function App() {
  return (
    <div className="App">
       <Header />
     <Switch>
     <Route path="/" exact component={Settings} />  
     </Switch>
    </div>
  );
}

export default App;
