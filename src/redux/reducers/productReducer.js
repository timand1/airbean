const initialState = {
    products: [],
    totalCost: 0
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                products: [...state.products, action.payload],
                totalCost: state.totalCost + action.payload.price
            }
        case 'REMOVE_PRODUCT':
            const productIndex = state.products.findIndex(product => product.id === action.payload.id);
            const copyProductsArray = [...state.products];
            copyProductsArray.splice(productIndex, 1)
            // const newProductsArray = copyProductsArray.filter(product => product.id !== action.payload);
            return {
                products: copyProductsArray,
                totalCost: state.totalCost - action.payload.price
            }
        case 'ADD_DISCOUNT':
            return {
                ...state,
                totalCost: state.totalCost - (38 * action.payload)
            }
        default:
            return state
    }
}

export { productReducer }