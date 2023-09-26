import Axios from './Axios'

const Add = (productId, userId, quantity) => {
    return Axios.post('/v1/cart/add-to-cart', {
        userId: userId,
        itemId: productId,
        quantity: quantity
    })
}

const Get = (userId) => {
    return Axios.get(`/v1/cart/${userId}`)
}


export { Add, Get }