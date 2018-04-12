class CommentsController < ApplicationController

	def index
      @comments = Comment.all
    render json: {
      message: "Got all commments",
      data: @comments
    }
  end

  def show
  	
  	
  end


  def create
    @comment = Comment.new(comment_params)
    @comment.save
    render json: {
      message: "Comment created!",
      comment: @commment
    }
  end

  end

  def edit
   
  end

  def update

  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.delete
    render json: {
      message: "Deleted",
      comment: params[:id]
    }
  end

  private

  def comment_params
  	params.require(:comment).permit(:comment)
  end
end
