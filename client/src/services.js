import axios from 'axios';

class Services {

	getAllTrips() {
		return axios.get('/api/trips')
	};

	getOneTrip(id) {
		console.log("inside services")
		return axios.get(`/api/trips/${id}`);
	
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
			}
		})
	}

	deleteTrip(id) {
		return axios({
			method: "DELETE",
			url: `/api/trips/${id}`
		})
	}
};

export default new Services();

