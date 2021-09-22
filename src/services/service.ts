import axios from 'axios';
import config from '../assets/config.json'
import { APIResponse } from '../types/api-response';
import { Service } from '../types/services';

export function ServiceService() {

    return {
        list
    }

}

function list() {
    return axios.get<APIResponse<Service[]>>(`${config.baseUrl}api/Service/GetAll`);
}