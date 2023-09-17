import Axios from './Axios'

const getProducts = (user) => {
    return Axios.get('/v1/product/')
}


export { getProducts }