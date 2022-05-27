import httpClient from '../helpers/httpClient';
import { Service } from '../types/services';
import { ServiceType } from '../types/serviceTypes';

export function ServiceService() {

    return {
        list,
        listServiceTypeBySrvId,
        getServiceTypeById,
        listServiceTypes
    }
}

function list() {
    return httpClient.get<Service[]>(`/Services`);
}

function listServiceTypeBySrvId(serviceId: number) {
    return httpClient.get<ServiceType[]>(`/servicetypes/service/${serviceId}`);
}

function listServiceTypes() {
    return httpClient.get<ServiceType[]>(`/servicetypes`);
}

function getServiceTypeById(serviceTypeId: number) {
    return httpClient.get<ServiceType>(`/servicetypes/${serviceTypeId}`);
}