import axios from "axios"
import { baseURL } from "../configs/configs"

const ApiCkan = axios.create( {baseURL} )

export default ApiCkan