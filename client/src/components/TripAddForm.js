import React from 'react';
import Services from '../services';
import { Redirect } from 'react-router-dom';

class TripAddForm extends React.Component {
	constructor() {
		super();
		this.state = {
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
	};

	handleInputChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		})
	};

	handleFormSubmit(e) {
		e.preventDefault();
		Services.createTrip(this.state)
		.then( trip => {
			this.setState({
				fireRedirect: true
			})
		})
		.catch( err => {
			console.log('error', err);
		})
	}

	render() {
		return (
			<div className="create-form">
			<form onSubmit={this.handleFormSubmit}>
			<input type="text" name="destination" onChange={this.handleInputChange} placeholder="Where are you going?" />
			<input type="text" name="date_of_dep" onChange={this.handleInputChange} placeholder="Date of Departure" />
			<input type="text" name="date_of_arr" onChange={this.handleInputChange} placeholder="Date of Arrival" />
			<input type="text" name="start_city" onChange={this.handleInputChange} placeholder="Origin City" />
			<input type="text" name="end_city" onChange={this.handleInputChange} placeholder="End City" />
			<input type="text" name="details" onChange={this.handleInputChange} placeholder="Trip Details" />
			<input type="submit" value="Create Trip" />
			</form>
			{this.state.fireRedirect ? <Redirect to="/trips" /> : ''}
			</div>
			)
	}
}

export default TripAddForm;