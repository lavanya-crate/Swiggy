import { createContext, useContext, useReducer } from "react"
import { CartReducer } from "../reducer/CartReducer";


const cartInitialState = {
  cartList: [],
  total: 0
}


const CartContext = createContext(cartInitialState);


export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(CartReducer, cartInitialState);
  const addToCart = (item) => {
    const updatedCartList = state.cartList.concat(item);
    updateTotal(updatedCartList);


    dispatch({
      type: "ADD_TO_CART",
      payload: {
        items: updatedCartList
      }
    })
  }
  const removeFromCart = (item) => {
    const updatedCartList = state.cartList.filter(current => current.id !== item.id);
    updateTotal(updatedCartList);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        items: updatedCartList
      }
    })
  }

  const updateTotal = (items) => {
    let total = 0; 
    items.forEach(item => total = total + item.price);

    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total
      }
    })
  }


  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}


export const useCart = () => {
  const context = useContext(CartContext);
  return context;
}

