import { myAxios } from "./axios";

export function getCollectionListAPI(paramsList?: any) {
  return myAxios({
    url: "/api/getCollectionList",
    method: "get"
  });
}
