require 'HTTParty'
#require 'HTTP'
class TripsController < ApplicationController
	include HTTParty
	 debug_output $stdout

#	include HTTP
	# before_action :authenticate_user



	def index	
		@trips = Trip.all
		render json: {
			message: "Got all the trips!",
			data: @trips
		}
	end

	def show
		@trip = Trip.find(params[:id])
		render json: {
			message: "Got the trip!",
			data: @trip
		}
	end

	def destroy
		@trip = Trip.find(params[:id])
		@trip.delete
		render json: {
			message: "Deleted trip!",
			trip: params[:id]
		}
	end

	def create
		@trip = Trip.new(trip_params)
		@trip.save
		render json: {
			message: "Trip created!",
			trip: @trip
		}
	end

	def update
		@trip = Trip.find(params[:id])
		@trip.update(trip_params)
		render json: {
			message: "Trip Updated!",
			trip: @trip
		}
	end

	def getData
		@response = HTTParty.post("https://api-dev.fareportallabs.com/air/api/search/searchflightavailability",
			body:
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
							"Origin": "LON",
							"Destination": "NYC"
							},
							{
								"DepartureDate": "2018-10-23",
								"DepartureTime": "1100",
								"Origin": "NYC",
								"Destination": "LON"
							}
						]
					}
				},
				header: {
					"Content-Type" => "application/json",
					"Authorization" => "Basic ZGllc2Vsa0BvcHRvbmxpbmUubmV0OjI0MTUxQUE5"
					})

		render json: {
			message: "data refreshed",
			data: @response
		}
		p @response
	end

	private
		def trip_params
			params.require(:trip).permit(:destination, :date_of_dep, :date_of_arr, :start_city, :end_city, :details)
		
	end	
end

