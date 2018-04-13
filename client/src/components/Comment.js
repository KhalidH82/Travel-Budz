import React from 'react';
import { Link } from 'react-router-dom';

const Comment = (props) => {
	return (
		<div className="comment">
			<p>{props.comment} <button class="btn-floating btn-small waves-effect waves-light red" onClick={() => props.handleDelete(props.id)}><i class="material-icons">close</i></button></p>
		</div>
		)
	}

export default Comment;