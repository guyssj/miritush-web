import axios from "axios";
import errorInterceptor from "../interceptors/error";
import config from '../assets/config.json'
import updateHeaderInterceptor from '../interceptors/updateHeader';
const httpClient = axios.create({
    baseURL: config.baseUrl,
});
errorInterceptor(httpClient);
updateHeaderInterceptor(httpClient);
export default httpClient;