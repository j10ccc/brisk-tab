import './components/Marks'
import './components/Dida'
import { useState, useEffect, createContext } from 'react'
import Marks from './components/Marks'
import Dida from './components/Dida'
import { Button, Divider, Layout, Space } from 'antd'
import axios from 'axios';

const { Header, Footer, Sider, Content } = Layout;
export type Website = {
  name: string,
  url: string,
  tag: string
}

let listData: Website[] = [];
export const host = 'http://localhost:8080';

function ToolBar(props: any) {
  function getSync() {
    axios.get(host + '/api/btab/getMarkList')
      .then((res) => {
        props.setMarkList(res.data);
        window.localStorage.setItem("BTAB_MARKLIST", JSON.stringify(res.data))
      })
  }
  return (
    <Space>
      <Button danger disabled>回收所有标签</Button>
      <Button disabled>导出</Button>
      <Button type="primary" onClick={() => getSync()}>同步</Button>

    </Space>
  )
}
export default function App() {
  const [markList, setMarkList] = useState(listData);
  useEffect(() => {
    let str = window.localStorage.getItem("BTAB_MARKLIST")
    if (str != null) {
      setMarkList(JSON.parse(str));
    }
  }, [])

  return (
    <>
      <Layout>
        <Header>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>Brick Tab</span>
            <ToolBar markList={markList} setMarkList={setMarkList}></ToolBar>
          </div>
        </Header>

        <Content>
          <Divider orientation="left">New Tab</Divider>
          <Marks markList={markList} setMarkList={setMarkList} />
          <Divider orientation="left">Hello Dida365</Divider>
          <Dida />
        </Content>

        <Footer>Copyright by SummersDay</Footer>
      </Layout>
    </>
  )
}
