class AddIndexs < ActiveRecord::Migration[5.1]
  def change
  	add_column :trips, :user_id, :integer
  	add_column :comments, :trip_id, :integer
  	add_index :trips, :user_id
  	add_index :comments, :trip_id
  end
end
