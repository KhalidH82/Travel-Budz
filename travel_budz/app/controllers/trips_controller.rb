class TripsController < ApplicationController

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
			trip = @trip
		}
	end

	def update
		@trip = Trip.find(params[:id])
		@trip.update(trip_params)
		render json: {
			message: "Trip Updated!"
			trip: @trip
		}
	end

	private
		def trip_params
			params.require(:trips).permit(:destination, :date_of_dep, :date_of_arr, :start_city. :end_city, :details)
		end
	end	
end


    t.string "destination"
    t.string "date_of_dep"
    t.string "date_of_arr"
    t.string "start_city"
    t.string "end_city"
    t.string "details"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
