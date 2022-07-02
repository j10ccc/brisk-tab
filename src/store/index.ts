import { useState } from "react";
import { Collection, UserConfigType } from "@types";
import { createContainer } from "unstated-next";
import { useLocalStorageState } from "ahooks";

const initialUserConfig = {
  collectionPreviewMaxLength: 3
};
function useStore() {
  // const [collectionList, setCollectionList] = useState<Collection[]>();
  const [collectionList, setCollectionList] = useLocalStorageState<
    Collection[] | undefined
  >("BTAB_COLLECTIONLIST");
  const [userConfig, setUserConfig] =
    useState<UserConfigType>(initialUserConfig);
  return { collectionList, setCollectionList, userConfig, setUserConfig };
}

export const Store = createContainer(useStore);
