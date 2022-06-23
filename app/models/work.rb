class Work < ApplicationRecord
  validates :f_name, :l_name , :picture, presence: true
  validates :picture, uniqueness: true
end
