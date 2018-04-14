import React from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => {
	return (
<div className="trip">
	<h1>{props.destination}</h1>
	<h2>{props.details}</h2>
	</div>
		)
	}

export default Results;