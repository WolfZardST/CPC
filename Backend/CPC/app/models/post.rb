class Post < ApplicationRecord
  belongs_to :group
  has_many :comments, -> { order(id: :desc) }, dependent: :destroy
end
