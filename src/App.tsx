import { useEffect } from "react";
import { Layout, Typography } from "antd";
import MainField from "@components/MainField";
import BTHeader from "@components/BTHeader";
import { Store } from "@store";
import "./App.css";
import BTDrawer from "@components/BTDrawer";
const { Text, Link } = Typography;

const { Footer, Content } = Layout;

export default function App() {
  const { setCollectionList } = Store.useContainer();
  useEffect(() => {
    const str = window.localStorage.getItem("BTAB_MARKLIST");
    if (str != null) {
      const tmp = JSON.parse(str);
      setCollectionList(tmp);
    }
  }, []);

  return (
    <Layout>
      <BTHeader />
      <Content className="content">
        <MainField />
      </Content>

      <Footer>
        <Text>Copyright © {new Date().getFullYear()}</Text>
        <Link href="https://github.com/SummersDays"> SummersDay</Link>
      </Footer>
      <BTDrawer />
    </Layout>
  );
}
