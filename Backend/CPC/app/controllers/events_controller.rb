class EventsController < ApplicationController
  before_action :set_event, only: %i[ show update destroy assist ]

  # GET /events
  def index
    @events = Event.all.order("id DESC").limit(1).offset(params[:page]*1)

    render json: @events
  end

  # GET /events/1
  def show
    render json: @event
  end

  # POST /events
  def create
    @event = Event.new(event_params)

    if @event.save
      render json: @event, status: :created, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH /events/1/assist
  def assist
    @event.update(asistentes: @event.asistentes + 1)
    render json: @event
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_params
      params.require(:event).permit(:nombre, :descripcion, :asistentes, :presencial, :lugar)
    end
end
