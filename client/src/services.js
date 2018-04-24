import axios from 'axios';

class Services {

	getAllTrips() {
		return axios ({
			method: "GET",
			url: "https://travelbudz.herokuapp.com/api/trips",
			headers: {
				'Authorization': localStorage.jwt,
			}
		})
	};

	getOneTrip(id) {
		console.log("inside services")
		
		return axios ({
			method: "GET",
			url: `https://travelbudz.herokuapp.com/api/trips/${id}`,
			headers: {
				'Authorization': localStorage.jwt,
			}
		})
	};

	createTrip(trip) {
		return axios({
			method: "POST",
			url: "https://travelbudz.herokuapp.com/api/trips",
			data: {
				destination: trip.destination,
				date_of_dep: trip.date_of_dep,
				date_of_arr: trip.date_of_arr,
				start_city: trip.start_city,
				end_city: trip.end_city,
				details: trip.details
			},
			headers: {
				'Authorization': localStorage.jwt,
			}
		});
	};

	updateTrip(trip, id) {
		return axios({
			method: "PUT",
			url: `https://travelbudz.herokuapp.com/api/trips/${id}`,
			data: {
				destination: trip.destination,
				date_of_dep: trip.date_of_dep,
				date_of_arr: trip.date_of_arr,
				start_city: trip.start_city,
				end_city: trip.end_city,
				details: trip.details
			},
			headers: {
				'Authorization': localStorage.jwt,
			}
		})
	}

	deleteTrip(id) {
		return axios({
			method: "DELETE",
			url: `https://travelbudz.herokuapp.com/api/trips/${id}`,
		headers: {
			'Authorization': localStorage.jwt,
			}
		})
	}

	logIn(user) {
		return axios({
			method: "POST",
			url: 'https://travelbudz.herokuapp.com/api/user_token',
			data: user
		})
	}

	register(info) {
		return axios({
			method: "POST",
			url: "https://travelbudz.herokuapp.com/api/user",
			data: info
		})
	}

	search(tdata) {
		console.log('searching 3rd party for API data', tdata);
		return axios({
			method: "POST",
			url: "https://travelbudz.herokuapp.com/api/trips/search",
			data: tdata
		})
	}
	
	getAllComments(tdata) {
		return axios ({
			method: "GET",
			url: "https://travelbudz.herokuapp.com//api/comments",
			data: tdata,
			headers: {
				'Authorization': localStorage.jwt,
			}
		})
	};

	createComment(comment) {
		return axios ({
			method: "POST",
			url: "https://travelbudz.herokuapp.com/api/comments",
			data: {
				comment: comment
			},
			headers: {
				'Authorization': localStorage.jwt,
			}
		})
	}

	deleteComment(id) {
		return axios({
			method: "DELETE",
			url: `https://travelbudz.herokuapp.com/api/comments/${id}`,
		headers: {
			'Authorization': localStorage.jwt,
			}
		})
	}

};

export default new Services();

