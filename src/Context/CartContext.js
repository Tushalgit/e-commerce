import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/CartReducer"

const CartContext = createContext();

const intialstate = {
    cart: [],
    total_item: "",
    total_amount: "",
    shipping_fee: 5000
}

const Cartprovider = ({ children }) => {
    
    const addtocart = (id, amount, product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { id, amount, product }
        })
    }
    const [state, dispatch] = useReducer(reducer, intialstate)

    return (<CartContext.Provider value={{ ...state, addtocart }}>{children}</CartContext.Provider>)
}

const Usecart = () => {
    return useContext(CartContext)
}

export { CartContext, Cartprovider, Usecart }