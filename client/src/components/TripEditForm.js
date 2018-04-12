import React from 'react';
import Services from '../services';
import { Redirect } from 'react-router-dom';

class TripEditForm extends React.Component {
	constructor() {
		super();
		this.state = {
			apiDataLoaded: false,
			apiData: null,
			destination: '',
			date_of_dep: '',
			date_of_arr: '',
			start_city: '',
			end_city: '',
			details: '',
			fireRedirect: false
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	componentDidMount() {
		Services.getOneTrip(this.props.match.params.id)
		.then(trip => {
			console.log(trip)
			this.setState({
				apiDataLoaded: true,
				apiData: trip.data,
				destination: trip.data.data.destination,
				date_of_dep: trip.data.data.date_of_dep,
				date_of_arr: trip.data.data.date_of_arr,
				start_city:  trip.data.data.start_city,
				end_city: trip.data.data.end_city,
				details: trip.data.data.details
			})
		})
		.catch( err => {
			console.log('error', err)
		})
	}

	handleInputChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		})
	}

	handleFormSubmit(e) {
		e.preventDefault();
		Services.updateTrip(this.state, this.props.match.params.id)
		.then( trip => {
			this.setState({
				fireRedirect: true
			})
		})
		.catch(err => {
			console.log('error', err)
		})
	}

renderEditForm() {
	return (
		<form className="edit-form" onSubmit={this.handleFormSubmit}>
		<input type="text" name="destination" onChange={this.handleInputChange} value={this.state.destination} />
		<input type="text" name="date_of_dep" onChange={this.handleInputChange} value={this.state.date_of_dep} />
		<input type="text" name="date_of_arr" onChange={this.handleInputChange} value={this.state.date_of_arr} />
		<input type="text" name="start_city" onChange={this.handleInputChange} value={this.state.start_city} />
		<input type="text" name="end_city" onChange={this.handleInputChange} value={this.state.end_city} />
		<input type="text" name="details" onChange={this.handleInputChange} value={this.state.details} />
		<input type="submit" value="Edit Trip" />
		</form>
		)
}

render() {
	return (
		<div className="edit-form-container">
			{this.state.apiDataLoaded ? this.renderEditForm() : ''}
			{this.state.fireRedirect ? <Redirect to={`/trips/${this.props.match.params.id}`} /> : ''}
		</div>
		)
	}

}

export default TripEditForm;