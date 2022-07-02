import { Button, Layout, Space } from "antd";
import { getCollectionListAPI } from "@api/getCollectionList";
import { Store } from "@store";
import "./index.css";

const { Header } = Layout;

function ToolBar() {
  const { setCollectionList } = Store.useContainer();

  function getSync() {
    getCollectionListAPI().then((res: any) => {
      if (res.data.code === 200200) setCollectionList(res.data.data);
      // TODO: handle data
    });
  }

  function removeCache() {
    setCollectionList(undefined);
  }

  return (
    <Space>
      <Button danger disabled>
        回收所有标签
      </Button>
      <Button disabled>导出</Button>
      <Button type="primary" onClick={() => getSync()}>
        同步
      </Button>
      <Button type="primary" danger onClick={removeCache}>
        清除本地缓存
      </Button>
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
        <h1 className="page-title">Brick Tab</h1>
        <ToolBar />
      </div>
    </Header>
  );
}
