import { Button, Card, List, Typography } from "antd";
import { Website } from "@types";
import { useState } from "react";
import { Store } from "@store";
const { Link } = Typography;

export default function CollectionCard(props: any) {
  const { userConfig } = Store.useContainer();
  const { name } = props.data;
  const list: Website[] = props.data.data;
  const [extend, setExtend] = useState(false);

  function onExtend() {
    setExtend(!extend);
  }

  return (
    <Card
      title={name}
      type="inner"
      size="small"
      extra={
        <Button
          type="link"
          onClick={onExtend}
          disabled={list.length <= userConfig.collectionPreviewMaxLength}>
          展开({list.length})
        </Button>
      }>
      <List size="small">
        {list
          .slice(
            0,
            extend ? list.length : userConfig.collectionPreviewMaxLength
          )
          .map((item, index) => (
            <List.Item
              key={index}
              actions={[
                <Link key="remove" type="danger">
                  删
                </Link>,
                <Link key="modify" type="warning">
                  改
                </Link>
              ]}>
              <Link href={item.url}>{item.name}</Link>
            </List.Item>
          ))}
      </List>
    </Card>
  );
}
