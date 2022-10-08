import axios from "axios";

const host = import.meta.env.VITE_APP_HOST;

export function myAxios(axiosConfig: any) {
  const service = axios.create({
    baseURL: host,
    timeout: 10000
  });
  return service(axiosConfig);
}
