class PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy upvote downvote ]

  # GET /posts
  def index
    @posts = Post.includes(:comments).all.order('id DESC').limit(1).offset(params[:page]*1)

    render json: @posts,  include: 'comments'
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH /posts/1/upvote
  def upvote
    @post.update(votos_up: @post.votos_up + 1)
    render json: @post
  end

  # PATCH /posts/1/downvote
  def downvote
    @post.update(votos_down: @post.votos_down + 1)
    render json: @post
  end

  # DELETE /posts/1
  def destroy
    @post.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:group_id, :titulo, :contenido, :votos_up, :votos_down)
    end
end
