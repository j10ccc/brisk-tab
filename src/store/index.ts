import { useState } from "react";
import { Collection, UserConfigType } from "@types";
import { createContainer } from "unstated-next";
import { useLocalStorageState } from "ahooks";

const initialUserConfig: UserConfigType = {
  collectionPreviewMaxLength: 3,
  collectionSyncHost: "https://mock.apifox.cn/m1/1144649-0-default"
};

function useStore() {
  // const [collectionList, setCollectionList] = useState<Collection[]>();
  const [collectionList, setCollectionList] = useLocalStorageState<
    Collection[] | undefined
  >("BTAB_COLLECTIONLIST");

  const [userConfig, setUserConfig] =
    useState<UserConfigType>(initialUserConfig);

  return {
    collectionList,
    setCollectionList,
    userConfig,
    setUserConfig
  };
}

export const Store = createContainer(useStore);
