# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Trip.create([
  {
    destination: "Cartagena, Columbia",
    date_of_dep: "2018-05-11",
    date_of_arr: "2018-05-15",
    start_city: "JFK",
    end_city: "CTG",
    details: "William and Lorena wedding."
  },
  {
    destination: "Paris, France",
    date_of_dep: "2018-10-12",
    date_of_arr: "2018-10-21",
    start_city: "JFK",
    end_city: "CDG",
    details: "Fall trip to Paris , 3 days in Barcelona, and 3 days in Cannes."
  }
  
])
puts "Created #{Trip.count} trips just now!"


