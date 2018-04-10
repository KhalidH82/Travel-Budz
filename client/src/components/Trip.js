import React from 'react';
import { Link } from 'react-router-dom';

const Trip = (props) => {
	return (
<div className="trip">
	<h1><Link to={`/trips/${props.id}`}>{props.destination}</Link></h1>
	<h2> Trip Details {props.details}</h2>
	</div>
		)
	}

export default Trip;
