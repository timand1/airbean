const initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                products: [...state.products, action.payload]
            }
        case 'REMOVE_PRODUCT':
            const copyProductsArray = [...state.products];
            const newProductsArray = copyProductsArray.filter(todo => todo.id !== action.payload)
            return {

                products: newProductsArray
            }
        default:
            return state
    }
}

export { productReducer }