import React, { Component } from 'react';
import Services from '../services';
import { Redirect } from 'react-router';
import '../App.css';
import {Button, Icon} from 'react-materialize'

class Register extends Component {
	constructor() {
		super();
		this.state = {
			apiDataLoaded: false,
			email: null,
			password: null
		}
		this.register = this.register.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e) {
		let value = e.target.value;
		if (e.target.name === "email") {
			this.setState({
				email: value
			})
		}
		else {
			this.setState({
				password: value
			})
		}
	}

	register() {
		const info = {"email": this.state.email, "password": this.state.password}
		Services.register(info)
		.then (result => {
			this.setState({
				apiDataLoaded: true
			})
		})
		.catch (err => {
			console.log('error', err)
		})
	}

	render() {
		if(this.state.apiDataLoaded === false) {
			return (
				<div className="App">
				<h1 style={{marginTop: "20vh", marginBottom: "5vh"}}>
				Register for Travel Budz
				</h1>
				<form>
				<label htmlFor="email">Email: </label>
				<br />
				<input 
					name="email" 
					id="email"
					type="email" 
					onChange={this.handleInputChange}
				/>
				<br /><br />
				<label htmlFor="password">Password: </label>
				<br />
				<input
					name="password"
					id="password"
					type="password"
					onChange={this.handleInputChange}
				/>
				</form>
				<br />
				<button className="btn waves-effect waves-light" onClick={this.register}><Icon left>person_add</Icon>
					Register
					</button>
					<br />
					<div> Have an account? <a href="/">Click Here</a> to login </div>
				</div>
				)
		}
		else {
			return (
				<Redirect to="/" />
				)
		}
	}
}

export default Register;