const initialState = {
    products: [],
    totalCost: 0,
    discount: 0
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const productsArray = [...state.products];
            productsArray.push(action.payload)
            localStorage.setItem("cart", JSON.stringify(productsArray));
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

            localStorage.setItem("cart", JSON.stringify(copyProductsArray));
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
            localStorage.removeItem('cart');

            return {
                products: [],
                totalCost: 0,
                discount: 0
            }
        case 'LOCAL_CART':
            let price = 0;
            const localArray = [...action.payload];

            for (let i = 0; i < localArray.length; i++) {
                price += localArray[i].price;
            }
            return {
                ...state,
                products: localArray,
                totalCost: price
            }
        default:
            return state
    }
}

export { productReducer }