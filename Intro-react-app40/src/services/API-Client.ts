import axios, {CanceledError} from "axios";

// Creating a service 
export default axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
    
})

export {CanceledError}