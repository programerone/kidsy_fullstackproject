class Api::CartItemsController < ApplicationController
    def index
        @cart_items = CartItem.find_by(cart_id:params[:cart_id])
            render "api/cart_items/index"
    end

    def show
        @cart_item = CartItem.find_by(id:params[:id])
            render "api/cart_items/show"
    end

    def create
        @cart_item = CartItem.new(cart_item_params)
        # debugger
            if @cart_item.save
                render "api/cart_items/show"
            else
                render json:@cart_item.errors.full_messages,status:402
            end
    end


    def destroy
        @cart_item = CartItem.find_by(id:params[:id])
        if @cart_item.destroy
            render "api/cart_items"
        else
            render json:@cart_item.errors.full_messages,status:402
        end
    end


    def cart_item_params
        wgs="aerdfgv"
        # debugger
        params.require(:cart_item).permit(:cart_id,:product_id,:quantity)
    end
end
