import { AxiosError } from "axios";

const DEBUG = process.env.REACT_APP_NODE_ENV !== "production";
const errorInterceptor = (axiosInstance: any) => {
    axiosInstance.interceptors.response.use((response: any) => {
        return response;
    }, (error: AxiosError) => {
        if (error?.response?.status === 401) {
            //Unauthorized
            console.log("omg is un")
            localStorage.removeItem("userToken");
            //redirect to Login
        } else {
            //dispatch your error in a more user friendly manner
            if (DEBUG) {
                //easier debugging
                console.group("Error");
                console.log(error);
                console.groupEnd();
            }
        }
    });
};
export default errorInterceptor;