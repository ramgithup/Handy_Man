class Api::WorksController < ApplicationController

  before_action :set_work, only: [:show, :update, :destroy]
  def index
    render json: Work.all
  end

  def show
    render json: @work
  end

  def create
    @work = Work.new(work_params)
    if @work.save 
      render json: @work 
    else
      render json: { errors: @work.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @work.update(work_params)
      render json: @work
    else
      render json: { errors: @work.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @work.destroy
    render json: { message: 'work Deleted' }
  end

  private 
    # { work: { f_name: '', l_name: " ", picture: '' } }
    def work_params
      params.require(:work).permit(:f_name, :l_name :picture)
    end

    def set_work
      @work = Work.find(params[:id])
    end
  # end
  private
    def work_params
      params.require(:work).permit( :f_name, :l_name, :picture)
    end

    def set_work
      @work = Work.find(params[:id])
    end
end
