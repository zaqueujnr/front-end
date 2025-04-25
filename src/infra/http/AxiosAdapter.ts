import type Http from "./Http";
import axios from "axios";


export default class AxiosAdapter implements Http {
  constructor() {  }
    async get(url: string, params: any): Promise<any> {
        const response = await axios.get(url, { params })
        return response.data
    }
    post(): Promise<any> {
        throw new Error("Method not implemented.");
    }

}