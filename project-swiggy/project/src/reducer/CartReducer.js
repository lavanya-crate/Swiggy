export const CartReducer = (state, action) => {
 
    const {type, payload } = action;
 
    switch(type){
        case "ADD_TO_CART":
            return {...state, cartList:payload.items}
        case "REMOVE_FROM_CART":
            return {...state, cartList:payload.items}
        case "UPDATE_TOTAL":
            return {...state, total: payload.total}
        default:
            throw new Error("No case Found In cartReducer")
    }
   
}
 
 
//  // CartReducer.js
// export const CartReducer = (state, action) => {
//   switch(action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         cartList: action.payload.items,
//         // Optionally, update the total here as well
//       };
//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         cartList: action.payload.items,
//       };
//     case "UPDATE_TOTAL":
//       return {
//         ...state,
//         total: action.payload.total,
//       };
//     default:
//       return state;
//   }
// };
