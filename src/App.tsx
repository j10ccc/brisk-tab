import { useEffect } from "react";
import { Layout } from "antd";
// import { TagType, Website } from "@types";
import MainField from "@components/MainField";
import BTHeader from "@components/BTHeader";
import { Store } from "@store";
import "./App.css";

const { Footer, Content } = Layout;

export default function App() {
  const { setCollectionList } = Store.useContainer();
  /*
  const [tagList, setTagList] = useState<TagType[]>([]);
  function addTag(tag: string) {
    console.log(tag);
    setTagList((state) => {
      return state?.concat([
        { name: tag, index: state.length + 1, pinned: false }
      ]);
    });
  }

  function creatTagList(tmp: any) {
    console.log(tmp);
    tmp.forEach((tagItem: Website) => {
      if (
        tagList?.find((listItem) => {
          console.log(listItem);
          return listItem.name === tagItem.tag;
        }) === undefined
      ) {
        addTag(tagItem.tag);
      }
    });
    console.log(tagList);
  } */

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

      <Footer>Copyright by SummersDay @ {new Date().getFullYear()}</Footer>
    </Layout>
  );
}
