class Team < ActiveRecord::Base
   validates :name, presence: true
   validates :size, numericality: { only_integer: true, greater_than: 1}
   validates :email, presence: true
   validates :agreed, numericality: {only_integer: true, equal_to: 1}
   #validates :
end
