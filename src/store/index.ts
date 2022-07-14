import { useState } from "react";
import { Collection, UserConfigType } from "@types";
import { createContainer } from "unstated-next";
import { useLocalStorageState } from "ahooks";

const initialUserConfig: UserConfigType = {
  collectionPreviewMaxLength: 3,
  collectionSyncHost: "https://mock.apifox.cn/m1/1144649-0-default",
  theme: "light"
};

const initialThemeList = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" }
];

function useStore() {
  // localstorage
  const [collectionList, setCollectionList] = useLocalStorageState<
    Collection[] | undefined
  >("BTAB_COLLECTIONLIST");

  const [userConfig, setUserConfig] = useLocalStorageState<UserConfigType>(
    "BTAB_USERCONFIG",
    { defaultValue: initialUserConfig }
  );

  // temporary state
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [themeList, setThemeList] = useState(initialThemeList);

  return {
    collectionList,
    setCollectionList,
    userConfig,
    setUserConfig,
    isDrawerVisible,
    setIsDrawerVisible,
    themeList
  };
}

export const Store = createContainer(useStore);
