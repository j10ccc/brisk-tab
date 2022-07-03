import { Button, Layout, message, Space } from "antd";
import { getCollectionListAPI } from "@api/getCollectionList";
import { Store } from "@store";
import { useState } from "react";

import "./index.css";

const { Header } = Layout;

function ToolBar() {
  const { setCollectionList } = Store.useContainer();
  const [counter, setCounter] = useState(1);

  function removeCache() {
    setCollectionList(undefined);
  }

  function onSetting() {}

  return (
    <Space>
      <Button danger disabled>
        回收所有标签
      </Button>
      <Button type="primary" danger onClick={removeCache}>
        清除本地缓存
      </Button>
      <Button onClick={onSetting}>设置</Button>
    </Space>
  );
}

export default function BTHeader() {
  return (
    <Header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <h1 className="page-title">Brisk Tab</h1>
        <ToolBar />
      </div>
    </Header>
  );
}
