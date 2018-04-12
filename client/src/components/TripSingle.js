import React from 'react';
import Services from '../services';
import { Redirect } from 'react-router-dom';

class TripSingle extends React.Component {
	constructor() {
		super();
		this.state = {
			apiDataLoaded: false,
			apiData: null,
			fireRedirect: false,
			fireRedirect2: false
	};
		this.deleteTrip = this.deleteTrip.bind(this)
		this.editTrip = this.editTrip.bind(this)
		
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
		<p>{this.state.apiData.date_of_dep}</p>
		<p>{this.state.apiData.date_of_arr}</p>
		<p>{this.state.apiData.start_city}</p>
		<p>{this.state.apiData.end_city}</p>
		<p>{this.state.apiData.details}</p>
		<button onClick={this.deleteTrip}> Remove Trip? </button>
		<button onClick={this.editTrip}> Edit Trip? </button>
		</div>
		)
}

editTrip(){
	this.setState({
		fireRedirect2: true
	})
}



deleteTrip() {
	Services.deleteTrip(this.props.match.params.id)
	.then( trip => {
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
		{this.state.fireRedirect2 ? <Redirect to ={`/trips/${this.props.match.params.id}/edit`} /> : ''}
		</div>
		)
	}
}

export default TripSingle;






