import axios from "axios";
import { api } from "../environment";

class ApiService {
  static async ApiGet(
    path: string,
    header = { headers: { "Content-Type": "application/json" } }
  ) {
    const url = new URL(api.url + path).toString();
    return axios.get(url, header);
  }
}

export default ApiService;
