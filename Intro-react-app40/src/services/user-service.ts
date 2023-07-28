import APIClient from "./API-Client";
import create from "./http-service";

interface User {
    id: number;
    name: string;
  }

  


  export default create('/users/');