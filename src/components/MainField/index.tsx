import { Col, Divider, List, Row } from "antd";
// import Dida from "../Dida";
import { Store } from "@store";
import CollectionCard from "@components/CollectionCard";

export default function MainField() {
  const store = Store.useContainer();
  const collectionList = store.collectionList;

  return (
    <>
      <h1>收藏夹</h1>
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
    </>
  );
}
