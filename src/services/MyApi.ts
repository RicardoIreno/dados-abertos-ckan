import axios from "axios"
const MyApi = axios.create( {baseURL: process.env.NEXT_PUBLIC_MYAPI} )
export default MyApi