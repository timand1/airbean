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


export { addProduct, removeProduct, addDiscount }