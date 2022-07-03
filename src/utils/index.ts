// DISPOSED
import { getCollectionListAPI } from "@api/getCollectionList";
import { Store } from "@store";

export default function Utils() {
  const { setCollectionList } = Store.useContainer();

  function removeStore(domain: string = "any") {}

  return { removeStore };
}
