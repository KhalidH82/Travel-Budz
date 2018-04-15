import React from 'react';
import { Link } from 'react-router-dom';

const Trip = (props) => {
	return (
<div className="trip">
	<h3><Link to={`/trips/${props.id}`}>{props.destination}</Link></h3>
	<p>{props.details}</p>
	</div>
		)
	}

export default Trip;
