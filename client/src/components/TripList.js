import React, { Component } from 'react';
import Services from '../services';
import Trip from './Trip'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {Button, Icon} from 'react-materialize'

class TripList extends Component {
	constructor() {
	super();
	this.state = {
		apiDataLoaded: false,
		apiData: null,
		fireRedirect: false
	}
	this.addTrip = this.addTrip.bind(this)
}

addTrip() {
	this.setState ({
		fireRedirect: true
	})
}

componentDidMount() {
	Services.getAllTrips()
	.then( trips => {
		this.setState ({
			apiDataLoaded: true,
			apiData: trips.data.data
		})
		console.log(this.state.apiData)
	})
	.catch(err => {
		console.log(err)
		console.log("I'm in a well")
	});
}

renderTrips() {
	return this.state.apiData.map(trip => <Trip {...trip} key={trip.id}/>)
};


render() {
	return (
		<div className="trip-list">
		<button className="waves-effect waves-light btn" onClick={this.addTrip}><Icon left>add_circle</Icon> Add Trip </button>
		<button className="waves-effect waves-light btn" onClick={this.addTrip}><Icon left>add_circle</Icon>  </button>
		{
			this.state.apiDataLoaded ? this.renderTrips() : (<h1>Loading...</h1>)}
			{this.state.fireRedirect ? <Redirect to="/trips/new" /> : <h1> </h1>}
			
		</div>
		)
	}
}

export default TripList;