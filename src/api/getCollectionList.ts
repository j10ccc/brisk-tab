import { myAxios } from "./axios";

export function getCollectionListAPI(baseURL: string) {
  return myAxios({
    baseURL,
    url: "/api/getCollectionList",
    method: "get"
  });
}
