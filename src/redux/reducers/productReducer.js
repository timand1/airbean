const initialState = {
    products: [],
    totalCost: 0,
    discount: 0
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload],
                totalCost: state.totalCost + action.payload.price
            }
        case 'REMOVE_PRODUCT':
            // To keep the cart list 'static'
            const productIndex = state.products.lastIndexOf(action.payload);
            const copyProductsArray = [...state.products];
            copyProductsArray.splice(productIndex, 1);

            return {
                ...state,
                products: copyProductsArray,
                totalCost: state.totalCost - action.payload.price
            }
        case 'ADD_DISCOUNT':
            const totalDiscount = 38 * action.payload
            return {
                ...state,
                discount: parseInt(totalDiscount)
            }
        case 'EMPTY_CART':
            return {
                ...state,
                products: [],
                totalCost: 0,
                discount: 0
            }
        default:
            return state
    }
}

export { productReducer }