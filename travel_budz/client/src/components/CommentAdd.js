import React from 'react';
import Services from '../services';
import { Redirect } from 'react-router-dom';
import {Button, Icon} from 'react-materialize'

class CommentAdd extends React.Component {
	constructor() {
		super();
		this.state = {
			comment: '',
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
		Services.createComment(this.state)
		.then( comment => {
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
			<div className="comment-add">
			<form onSubmit={this.handleFormSubmit}>
			<input type="text" name="comment" onChange={this.handleInputChange} placeholder="Comment on this trip..." />
			<input className="waves-effect waves-light btn" type="submit" value="Add Comment" />
			</form>
			{this.state.fireRedirect ? <Redirect to="/trips" /> : ''}
			</div>
			)
	}
}

export default CommentAdd;