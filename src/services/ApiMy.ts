import axios from "axios"
const ApiMy = axios.create( {baseURL: 'http://localhost:3000/api/'} )
export default ApiMy
