class Api::ProductsController < ApplicationController

    def index
        @products = Product.all
        render "api/products/index"
    end

    def show
        @product = Product.find_by(id: params[:id])
        # debugger
        render "api/products/show"
    end

    def create
        hello="wadsv"
        debugger
        @product = Product.new(product_params)
        
        if @product.save
            render "api/products/show"
        else
            render json:@product.errors.full_messages,status: 422
        end
    end

    def update
        @product = Product.find(params[:id])
        debugger
        if @product.update(product_params)
            render "api/products/show"
        else
            render json:@product.errors.full_messages
        end
    end

    def destroy
        @product = Product.find(params[:id])
        if @product.destroy
            render :show
        else
            render json:@product.errors.full_messages
        end
    end


    def product_params
        # debugger
        params.require(:product).permit(:title,:seller_id, :description, :price, :quantity,:photo)
    end
end
