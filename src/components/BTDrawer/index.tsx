import {
  Form,
  Drawer,
  Input,
  Button,
  Card,
  Radio,
  RadioChangeEvent
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import { Store } from "@store";

function CollectionSetting() {
  const { collectionSyncHost } = Store.useContainer().userConfig;
  return (
    <Form layout="vertical">
      <Form.Item label="同步地址" name="collectionSyncHost">
        <Input
          placeholder="http://example.com"
          defaultValue={collectionSyncHost}
        />
      </Form.Item>
    </Form>
  );
}

function ThemeSetting() {
  const { themeList, userConfig, setUserConfig } = Store.useContainer();
  const { theme } = userConfig;

  function toggleTheme({ target: { value } }: RadioChangeEvent) {
    setUserConfig({ ...userConfig, theme: value });
  }

  return (
    <Form layout="vertical">
      <Form.Item label="默认" name="theme">
        <Radio.Group
          options={themeList}
          onChange={toggleTheme}
          defaultValue={theme}
          optionType="button"
        />
      </Form.Item>
    </Form>
  );
}

export default function BTDrawer() {
  const { isDrawerVisible, setIsDrawerVisible } = Store.useContainer();
  return (
    <Drawer
      title="设置"
      visible={isDrawerVisible}
      onClose={() => {
        setIsDrawerVisible(false);
      }}>
      <Card
        size="small"
        type="inner"
        title="收藏夹"
        bordered={false}
        extra={<Button type="link">保存</Button>}>
        <CollectionSetting />
      </Card>
      <Card size="small" type="inner" title="主题" bordered={false}>
        <ThemeSetting />
      </Card>
    </Drawer>
  );
}
