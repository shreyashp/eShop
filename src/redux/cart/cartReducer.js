import { ADD_TO_CART, REMOVE_ALL_QUANTITY, REMOVE_FROM_CART } from './cartActionType';

const initialCart = {
    cartItems: []
}

const cartReducer = (state = initialCart, action) => {
    const product = action.payload;
    const exist = state.cartItems.find(x => x.id === product.id);
    switch (action.type) {
        case ADD_TO_CART:
            if (exist) {
                return {
                    cartItems: state.cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
                }
            }
            else {
                return {
                    cartItems: [...state.cartItems, { ...product, qty: 1 }]
                }
            }

        case REMOVE_FROM_CART:
            if (exist.qty === 1) {
                return {
                    cartItems: state.cartItems.filter((x) => x.id !== product.id),
                }

            } else {
                return {
                    cartItems: state.cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x),
                }

            }

        case REMOVE_ALL_QUANTITY:
            if (exist) {
                return {
                    cartItems: state.cartItems.filter((x) => x.id !== product.id)
                }
            }

        default: return state;
    }
}

export default cartReducer;