const initial = {
    loading: true,
    data: [],
    error: ''
}

export const filterreducer = (state = initial, action) => {
    switch (action.type) {
        case 'product_filter':
            return {
                loading: false,
                data: action.payload
            }
    
        default: return state;
    }
}

export const cartreducer = (state = initial, action) => {
    switch (action.type) {
        case 'product_cart':
            return {
                loading: false,
                data: action.payload
            }
    
        default: return state;
    }
}