const product_filter = (data) => {
    return {
        type: 'product_filter',
        payload: data
    }
}


export const filterdatas = (data) => {
    return (dispath) => {
        dispath(product_filter(data));
    }
}

const product_cart = (data) => {
    return {
        type: 'product_cart',
        payload: data
    }
}


export const cartdatas = (data) => {
    return (dispath) => {
        dispath(product_cart(data));
    }
}