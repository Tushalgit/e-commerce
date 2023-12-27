function CartReducer(state, action) {

    switch (action.type) {
        case "ADD_TO_CART":
            let { id, amount, product } = action.payload
            let cartproduct;
            cartproduct = {
                id: id,
                name: product.name,
                price:product.price,
                amount: amount,
                image: product.image[0].url,
                max: product.stock
            }
            return {
                ...state,
                cart: [...state.cart,cartproduct]
            }

        default: return state
    }
}
export default CartReducer