import APIClient from "./API-Client";

interface Entity{
    id: number
}

  class HttpService{
    
    endpoint:string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll<T>(){ //T is a genereic value
        const controller = new AbortController();
       const request = APIClient
      .get<T[]>(this.endpoint, {
        signal: controller.signal,
      })
      return {request, cancel: () => controller.abort()}
    }

    delete(id: number){
        return APIClient.delete(this.endpoint + id)
    }

    create<T>(entity:T){
        return APIClient.post(this.endpoint, entity)
    }

    update<T extends Entity>(entity: T){
       return APIClient.patch(this.endpoint + entity.id, entity) //add the foward slash send to correct url
    }
  }

  const create = (endpoint: string) => new HttpService(endpoint)
  export default create;