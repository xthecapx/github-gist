import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import SearchAndResults from './features/SearchAndResults/SearchAndResults';
import GistDetails from './features/GistDetails/GistDetails';
import SearchForm from './components/SearchForm';

import './App.css';

interface AppProps {}

function App({}: AppProps) {
  return (
    <Router>
      <div className="App">
        <div className="header fixed-top">
          <SearchForm />
        </div>
        <Switch>
          <Route exact path="/:id" component={GistDetails} />
          <Route path="*" exact={true} component={SearchAndResults} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
