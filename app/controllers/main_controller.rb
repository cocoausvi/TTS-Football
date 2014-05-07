class MainController < ApplicationController #MainController is a child of default ruby Application Controller
	def playerlog
		name2 = params[:name1]
		playertype2 = params[:playertype1]
		txtthrow2 = params[:txtthrow1]
		txtrun2 = params[:txtrun1]

		players = Playertable.new(name1: name2, playertype1: playertype2, txtthrow1: txtthrow2, txtrun1: txtrun2)

		players.save

		head :ok

	end

	def index
		@players = Playertable.all
	end

end

