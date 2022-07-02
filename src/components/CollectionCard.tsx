import { Button, Card, List } from "antd";
import { Website } from "@types";
import { useState } from "react";
import { Store } from "@store";

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
      size="small"
      extra={
        <Button
          type="link"
          onClick={onExtend}
          disabled={list.length <= userConfig.collectionPreviewMaxLength}>
          展开
        </Button>
      }>
      <List>
        {list
          .slice(
            0,
            extend ? list.length : userConfig.collectionPreviewMaxLength
          )
          .map((item, index) => (
            <List.Item key={index}>
              <a href={item.url}>{item.name}</a>
            </List.Item>
          ))}
      </List>
    </Card>
  );
}
