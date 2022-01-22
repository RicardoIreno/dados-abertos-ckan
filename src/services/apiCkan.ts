import axios from "axios"
const ApiCkan = axios.create( {baseURL: process.env.NEXT_PUBLIC_BASEURL} )
export default ApiCkan