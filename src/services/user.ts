import httpClient from '../helpers/httpClient';
import { User } from '../types/user';

export function UserService() {

    return {
        details,
        files
    }
}

function details() {
    return httpClient.get<User>(`/my/details`);
}

function files(serviceId: number) {
    return httpClient.get<any[]>(`/servicetypes/service/${serviceId}`);
}