class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :size
      t.string :email
      t.boolean :agreed

      t.timestamps
    end
  end
end
