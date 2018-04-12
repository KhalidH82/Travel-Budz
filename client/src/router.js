import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from './App';
import TripList from './components/TripList';
import TripSingle from './components/TripSingle';
import TripAddForm from './components/TripAddForm';
import TripEditForm from './components/TripEditForm';
import Register from './components/Register';
import Search from './components/Search';

export default (
  <Router>
    <Switch>
     
      <Route exact path="/" component={App}/>
      <Route path="/trips/search" component={Search} />
      <Route exact path="/trips" component={TripList} />
      <Route path="/trips/new" component={TripAddForm} />
      <Route exact path="/trips/:id" component={TripSingle} />
      <Route path="/trips/:id/edit" component={TripEditForm} />
      <Route exact path="/register" component={Register}/>
    </Switch>
  </Router>
)