import axios from 'axios';

class Services {

	getAllTrips() {
		return axios ({
			method: "GET",
			url: "/api/trips",
			headers: {
				'Authorization': localStorage.jwt,
			}
		})
	};

	getOneTrip(id) {
		console.log("inside services")
		
		return axios ({
			method: "GET",
			url: `/api/trips/${id}`,
			headers: {
				'Authorization': localStorage.jwt,
			}
		})
	};

	createTrip(trip) {
		return axios({
			method: "POST",
			url: "/api/trips",
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
			url: `/api/trips/${id}`,
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
			url: `/api/trips/${id}`,
		headers: {
			'Authorization': localStorage.jwt,
			}
		})
	}

	logIn(user) {
		return axios({
			method: "POST",
			url: '/api/user_token',
			data: user
		})
	}

	register(info) {
		return axios({
			method: "POST",
			url: "/api/user",
			data: info
		})
	}

	search(tdata) {
		return axios.get('/api/search', {
			params: {
				data: tdata
			}
		})


	}
};

export default new Services();

