import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-easybuy.firebaseio.com/'
})