import axios from 'axios';
import config from '../assets/config.json'
import { AuthResponse } from '../types/auth-response';
import { LoginRequest } from '../types/login-request';

export function AuthService() {

    return {
        login,
        otpRequest,
        loginUser
    }

}

function login(phoneNumber: string, otpCode: number) {
    const userCer: LoginRequest = {
        phoneNumber: phoneNumber,
        otpCode: otpCode,
        grant_type: 'passwordless_otp'
    }
    return axios.post<AuthResponse>(`${config.baseUrl}/authenticate/login`, userCer);
}

function otpRequest(phoneNumber: string) {
    return axios.post(`${config.baseUrl}/authenticate/passwordless`, { phoneNumber: phoneNumber });
}
function loginUser(serviceId: number) {
    return axios.get(`${config.baseUrl}/authenticate/passwordless`);
}