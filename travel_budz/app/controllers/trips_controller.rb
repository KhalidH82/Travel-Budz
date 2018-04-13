class TripsController < ApplicationController
	include HTTParty
	before_action :authenticate_user


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

	def search
		@response = HTTParty.get("")
    	render json: {
      		message: "Flight data",
      		data: @response
    }		
	end

	private
		def trip_params
			params.require(:trip).permit(:destination, :date_of_dep, :date_of_arr, :start_city, :end_city, :details)
		
	end	
end

