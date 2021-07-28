import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { NewsSearch } from '../../containers/NewsSearch';

export default function App() {
  return <main className="App">
    <Router>
      <Switch>

        <Route exact path="/" render={() => (
          <Redirect to="/news"/>
        )}/>

        <Route path="/news" render={routerProps => 
          <NewsSearch {...routerProps}/>
        }/>

        <Route path="/news/:id" render={routerProps => 
          <NewsSearch {...routerProps}/>
        }/>

        <Redirect to="/"/>

      </Switch>
    </Router>
  </main>;
}
