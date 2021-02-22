import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './views/landing';
import StyleGuide from './views/styleGuide';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/style-guide" component={StyleGuide} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
