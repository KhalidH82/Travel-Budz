import React, { Component } from 'react';
import Services from '../services';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {Button, Icon} from 'react-materialize'
import Comment from './Comment'

class CommentList extends Component {
	constructor() {
	super();
	this.state = {
		apiDataLoaded: false,
		apiData: null,
		comment: '',	
		fireRedirect: false
	}
	this.addComment = this.addComment.bind(this)
}

addComment() {
	this.setState ({
		fireRedirect: true
	})
}

getComments() {
	Services.getAllComments(this.props)
	.then( comments => {
		console.log("props", this.props)
		console.log(comments)
		this.setState ({
			apiDataLoaded: true,
			apiData: comments.data
		})
		console.log(this.state.apiData)
	})
	.catch(err => {
		console.log(err)
		console.log("No comments")
	});
}

handleDelete(id) {
	console.log('deleting', id);
	Services.deleteComment(id)
		.then(success => {
			this.getComments();
		}) 
		.catch(err => {
			console.log('error', err);
		})
}


componentDidMount() {
	console.log("this.props", this)
	this.getComments();
}

renderComments() {
	console.log("apidata", this.state.apiData)
	return this.state.apiData.data.map(comment => <Comment {...comment} key={comment.id} handleDelete={() => this.handleDelete(comment.id)}/>)

};


render() {
	return (
		<div className="comments-list">
		{
			this.state.apiDataLoaded ? this.renderComments() : (<h1>Loading...</h1>)}
	
		</div>
		)
	}
}

export default CommentList;