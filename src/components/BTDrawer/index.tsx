import { Form, Drawer, Input, Button, Card, Radio } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { Store } from "@store";

function CollectionSetting() {
  const { userConfig, setUserConfig } = Store.useContainer();
  const { collectionSyncHost } = userConfig;
  const [form] = Form.useForm();

  function onSave() {
    setUserConfig({
      ...userConfig,
      ...form.getFieldsValue().filter((item: any) => item)
    });
  }

  return (
    <Card
      size="small"
      type="inner"
      title="收藏夹"
      extra={
        <Button type="link" onClick={onSave}>
          保存
        </Button>
      }>
      <Form layout="vertical" form={form}>
        <Form.Item label="同步地址" name="collectionSyncHost">
          <Input
            placeholder="http://example.com"
            defaultValue={collectionSyncHost}
          />
        </Form.Item>
      </Form>
    </Card>
  );
}
function ThemeSetting() {
  const { theme } = Store.useContainer().userConfig;
  const { themeList } = Store.useContainer();
  return (
    <Card
      size="small"
      type="inner"
      title="主题"
      extra={<Button type="link">保存</Button>}>
      <Form layout="horizontal">
        <Form.Item label="模式选择" name="themeType">
          <Radio.Group
            options={themeList}
            defaultValue={theme}
            optionType="button"
          />
        </Form.Item>
      </Form>
    </Card>
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
      <CollectionSetting />
      <ThemeSetting />
    </Drawer>
  );
}
