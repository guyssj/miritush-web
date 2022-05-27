const updateHeaderInterceptor = (axiosInstance: any) => {
    axiosInstance.interceptors.request.use((config: any) => {
        const jwtToken = localStorage.getItem("userToken");
        config.headers["Authorization"] = jwtToken;
        return config;
    }, (error: any) => {

    });
};
export default updateHeaderInterceptor;