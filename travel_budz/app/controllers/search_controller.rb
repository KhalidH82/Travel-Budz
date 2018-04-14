class SearchController < ApplicationController
	include HTTParty

	def search
		@response = HTTParty.post("https://api-dev.fareportallabs.com/air/api/search/searchflightavailability",
			:query => 
			{
				"ResponseVersion": "VERSION41",
				"FlightSearchRequest": {
					"Adults": "1",
					"Child": "0",
					"ClassOfService": "ECONOMY",
					"InfantInLap": "0",
					"InfantOnSeat": "0",
					"Seniors": "0",
					"TypeOfTrip": "ROUNDTRIP",
					"SegmentDetails": [
						{
							"DepartureDate": "2018-10-13",
							"DepartureTime": "1100",
							"Destination": "NYC",
							"Origin": "LON"
							},
							{
								"DepartureDate": "2018-10-23",
								"DepartureTime": "1100",
								"Destination": "LON",
								"Origin": "NYC"
							}
						]
					}
				}
				:headers => {
					'Authorization' => "Basic ZGllc2Vsa0BvcHRvbmxpbmUubmV0OjI0MTUxQUE5"
					'Content-Type' => "application/json"
					)
		render json: {
			message: "data refreshed",
			data: @response
		}
	end

end
