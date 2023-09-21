import Axios from './Axios'

const getBrand = () => {
    return Axios.get('/v1/brand/')
}



export { getBrand }