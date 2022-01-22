import axios from "axios"
const ApiCkan = axios.create( {baseURL: process.env.NEXT_PUBLIC_BASEURL} )

// const ApiCkan = axios.create({  
//   baseURL: process.env.NEXT_PUBLIC_BASEURL,
//   headers: { 'Authorization': 'a8b0ff18-2234-4391-80a4-e61168d4419f' }
//   })
export default ApiCkan