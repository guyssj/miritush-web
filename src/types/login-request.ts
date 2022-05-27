export interface LoginRequest {
    grant_type?: "authorization_code" | "password" | "passwordless_otp",
    username?: string,
    password?: string,
    phoneNumber?: string,
    otpCode?: number
}