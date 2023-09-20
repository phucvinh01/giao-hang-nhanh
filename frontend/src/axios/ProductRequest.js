import Axios from './Axios'

const getProducts = (user) => {
    return Axios.get('/v1/product/')
}

const insertProduct = (product) => {
    return Axios.post('/v1/product/', product)
}

const deleteProduct = (id) => {
    return Axios.delete(`/v1/product/${id}`)

}


export { getProducts, insertProduct, deleteProduct }