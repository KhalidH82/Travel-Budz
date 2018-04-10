import React, { Component } from 'react';
import Services from '../services';
import Trip from './Trip'
import { Link } from 'react-router-dom';

class TripList extends Component {
	constructor() {
	super();
	this.state = {
		apiDataLoaded: false,
		apiData: null
	}
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
		{
			this.state.apiDataLoaded ? this.renderTrips() : (<h1>Loading...</h1>)}
			
		</div>
		)
	}
}

export default TripList;