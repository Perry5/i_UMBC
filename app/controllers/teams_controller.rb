class TeamsController < ApplicationController

def new
end

def edit
end

def show
    @team = Team.find(params[:id]);
end

def update
end

def index
end

def create
    @team = Team.new(team_params)
    @team.save
    redirect_to @team


    #debugging
    #render text: params[:team].inspect
end

def destroy
end


private
 def team_params
   params.require(:team).permit(:name, :size, :email, :agreed)
 end

end
