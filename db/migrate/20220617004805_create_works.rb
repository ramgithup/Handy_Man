class CreateWorks < ActiveRecord::Migration[7.0]
  def change
    create_table :works do |t|
      t.string :f_name
      t.string :l_name
      t.string :picture

      t.timestamps
    end
  end
end
