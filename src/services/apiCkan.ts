import axios from "axios"
const baseURL = process.env.NEXT_PUBLIC_BASEURL
const ApiCkan = axios.create( {baseURL} )
export default ApiCkan