const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}

const removeProduct = (product) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: product
    }
}

const addDiscount = (numDiscount) => {
    return {
        type: 'ADD_DISCOUNT',
        payload: numDiscount
    }
}

const emptyCart = (product) => {
    return {
        type: 'EMPTY_CART',
        payload: product
    }
}

const getLocalCart = (product) => {
    return {
        type: 'LOCAL_CART',
        payload: product
    }
}


export { addProduct, removeProduct, addDiscount, emptyCart, getLocalCart }