export type Website = {
  name: string;
  url: string;
  tag: string;
};

export type TagType = {
  name: string;
  index: number;
  pinned: boolean;
};

export type Collection = {
  name: string;
  data: Website[];
};

export type UserConfigType = {
  collectionPreviewMaxLength: number;
  collectionSyncHost: string;
  theme: "light" | "dark";
};
