import React from 'react';
import Services from '../services';
import { Redirect } from 'react-router-dom';

class TripSingle extends React.Component {
	constructor() {
		super();
		this.state = {
			apiDataLoaded: false,
			apiData: null,
			fireRedirect: false
	};
		this.deleteSong = this.deleteSong.bind(this)
	}

componentDidMount() {
	Services.getOneTrip(this.props.match.params.id)
	.then( trip => {
		this.setState ({
		apiDataLoaded: true,
		apiData: trip.data.data
	})
		console.log(this.state.apiData)
})
	.catch( err => {
		console.log('error', err);
	})
}

renderTrip() {
return (
		<div className="single-trip">
		<h1>{this.state.apiData.destination}</h1>
		<button onClick={this.deleteSong}> Remove Trip? </button>
		</div>
		)
}

deleteSong() {
	Services.deleteTrip(this.props.match.params.id)
	.then( song => {
		this.setState({
			fireRedirect: true
		})
	})
	.catch( err => {
		console.log("error", err)
	})
}

render() {
	return (
		<div className="trip-single">
		{this.state.apiDataLoaded ? this.renderTrip() : ''}
		{this.state.fireRedirect ? <Redirect to ="/trips" /> : ''}
		</div>
		)
	}
}

export default TripSingle;








