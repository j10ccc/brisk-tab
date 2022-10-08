import { Col, message, Card, Row, Button, Space } from "antd";
// import Dida from "../Dida";
import { Store } from "@store";
import { getCollectionListAPI } from "@api/getCollectionList";
import CollectionCard from "@components/CollectionCard";

export default function MainField() {
  const { collectionList, setCollectionList, userConfig } =
    Store.useContainer();

  function getSync() {
    getCollectionListAPI(userConfig.collectionSyncHost)
      .then((res: any) => {
        if (res.data.code === 200200) setCollectionList(res.data.data);
        else message.error(`与服务器同步失败(${res.data.code})`);
      })
      .catch((err) => {
        console.log(err);
        message.error("网络连接失败");
      });
  }

  return (
    <Card
      title="收藏夹"
      extra={
        <Space>
          <Button disabled>导出</Button>
          <Button type="primary" onClick={getSync}>
            添加
          </Button>
          <Button type="dashed" onClick={getSync}>
            同步
          </Button>
        </Space>
      }>
      <Row gutter={[16, 16]}>
        {collectionList?.map((item, index) => (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            key={index}>
            <CollectionCard data={item} />
          </Col>
        ))}
      </Row>
    </Card>
  );
}
