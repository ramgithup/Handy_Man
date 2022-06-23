class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :name
      t.string :type
      t.string :location
      t.belongs_to :work, null: false, foreign_key: true

      t.timestamps
    end
  end
end
