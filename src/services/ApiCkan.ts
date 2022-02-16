import axios from "axios"
const ApiCkan = axios.create( {baseURL: `http://localhost:5000/api/3/action/`} )
export default ApiCkan