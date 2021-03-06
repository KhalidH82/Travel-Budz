import React from 'react';
import Services from '../services';
import { Redirect } from 'react-router-dom';
import {Button, Icon} from 'react-materialize'

class Search extends React.Component {
	constructor() {
		super();
		this.state = {
			apiDataLoaded: false,
			apiData: null,
			
			origin: "JFK",
			destination: "LON",
			dep_date: "2018-05-09",
			d_time: "1100",
			ret_date: "2018-05-20",
			r_time: "1100",
			class: "ECONOMY",
			no_of_adults: "1",
			seniors: "0",
			children: "0",
			lap_child: "0",
			child_seat: "0"
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	componentDidMount() {

	}

	handleInputChange(e) {
		let value = e.target.value;
		let name = e.target.name;
		this.setState({
			[name]: value
		})
	}

	handleFormSubmit(e) {
		e.preventDefault();
		const fieldData = {
			origin: this.state.origin, 
			destination: this.state.destination, 
			dep_date: this.state.dep_date,
			d_time: this.state.d_time, 
			ret_date: this.state.ret_date, 
			r_time: this.state.r_time, 
			class: this.state.class, 
			no_of_adults: this.state.no_of_adults, 
			seniors: this.state.seniors, 
			children: this.state.children, 
			lap_child: this.state.lap_child, 
			child_seat: this.state.child_seat
		}

		Services.search(fieldData)
		.then( data => {
			console.log(data)
		})
		.catch( err => {
			console.log(err)
		})
	}

	render() {
		return (
			<div className="search-form">
			<form onSubmit={this.handleFormSubmit}>
			<input name="origin" onChange={this.handleInputChange} type="text" placeholder="From(Airport)" />
			<input name="destination" onChange={this.handleInputChange} type="text" placeholder="To(Airport)" />
			<input name="dep_date" onChange={this.handleInputChange} type="text" placeholder="Departure Date" />
			<input name="d_time" onChange={this.handleInputChange} type="text" placeholder="Departure Time" />
			<input name="ret_date" onChange={this.handleInputChange} type="text" placeholder="Return Date" />
			<input name="r_time" onChange={this.handleInputChange} type="text" placeholder="Return Time" />
			<input name="class" onChange={this.handleInputChange} type="text" placeholder="Cabin Class" />
			<input name="no_of_adults" onChange={this.handleInputChange} type="text" placeholder="# of Adults" />
			<input name="seniors" onChange={this.handleInputChange} type="text" placeholder="# of Seniors" />
			<input name="children" onChange={this.handleInputChange} type="text" placeholder="# of Children" />
			<input name="lap_child" onChange={this.handleInputChange} type="text" placeholder="# Lap Child" />
			<input name="child_seat" onChange={this.handleInputChange} type="text" placeholder="# of Children" />
			<input className="waves-effect waves-light btn" type="submit" value="Search" />
			</form>
			</div>
			)
	}

}

export default Search;