import React from 'react';
import './components/Marks';
import './components/Dida';
import { useState, useEffect } from 'react';
import Marks from './components/Marks';
import Dida from './components/Dida';
import { Button, Divider, Layout, Space } from 'antd';
import axios from 'axios';

const { Header, Footer, Content } = Layout;
export type Website = {
  name: string;
  url: string;
  tag: string;
};
export type TagType = {
  name: string;
  index: number;
  pinned: boolean;
};
export const host = import.meta.env.VITE_APP_HOST;

function ToolBar(props: any) {
  function getSync() {
    axios.get(host + '/api/btab/getMarkList').then((res) => {
      props.setMarkList(res.data);
      window.localStorage.setItem('BTAB_MARKLIST', JSON.stringify(res.data));
      props.creatTagList(res.data);
    });
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
    </Space>
  );
}

export default function App() {
  const [markList, setMarkList] = useState();
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
  }

  useEffect(() => {
    let str = window.localStorage.getItem('BTAB_MARKLIST');
    if (str != null) {
      let tmp = JSON.parse(str);
      setMarkList(tmp);
    }
  }, []);

  return (
    <>
      <Layout>
        <Header>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <span>Brick Tab</span>
            <ToolBar
              markList={markList}
              setMarkList={setMarkList}
              addTag={addTag}
              creatTagList={creatTagList}></ToolBar>
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
  );
}
