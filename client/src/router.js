import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from './App';
import TripList from './components/TripList';
import TripSingle from './components/TripSingle'

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/trips" component={TripList}/>
      <Route path="/trips/:id" component={TripSingle} />
    </Switch>
  </Router>
)