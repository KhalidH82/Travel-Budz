class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|

    	t.string :destination
    	t.string :date_of_dep
    	t.string :date_of_arr
    	t.string :start_city
    	t.string :end_city
    	t.string :details
    	
		t.timestamps
    end
  end
end
