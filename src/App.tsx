import './components/Marks'
import './components/Dida'
import { useState, useContext, createContext } from 'react'
import Marks from './components/Marks'
import Dida from './components/Dida'
import { Divider } from 'antd'

type Website = {
  name: string,
  url: string,
  tag: string
}
type Data = [{
  website: Website,
}]

const listData: Website[] = [
  { "name": "notion", "url": "http://notion.so/", "tag": "test" },
  { "name": "github", "url": "https://github.com/", "tag": "test" },
  { "name": "youtube", "url": "https://www.youtube.com/", "tag": "test" },
  { "name": "百度网盘", "url": "https://pan.baidu.com/", "tag": "test" },
  { "name": "bilibili", "url": "https://www.bilibili.com/", "tag": "test" },
  { "name": "知乎", "url": "https://www.zhihu.com/", "tag": "test" },
  { "name": "淘宝", "url": "http://www.taobao.com", "tag": "test" },
  { "name": "京东", "url": "https://www.infinitynewtab.com/jd.pro.html ", "tag": "test" },
  { "name": "twitter", "url": "https://www.twitter.com", "tag": "test" },
  { "name": "keybr", "url": "http://www.keybr.com", "tag": "test" },
  { "name": "欧路字典", "url": "https://dict.eudic.net/", "tag": "test" },
  { "name": "jsDelivr", "url": "https://www.jsdelivr.com/", "tag": "test" },
  { "name": "antdm", "url": "https://mobile.ant.design/zh", "tag": "test" },
  { "name": "antd", "url": "https://ant.design/zh", "tag": "test" },
  { "name": "工大超星", "url": "http://zjut.fanya.chaoxing.com/portal", "tag": "test" },
  { "name": "工大正方", "url": "http://www.gdjw.zjut.edu.cn/jwglxt/xtgl/login_slogin.html", "tag": "test" },

]

export const DataContext = createContext(listData);

export default function App() {
  const [markList, setMarkList] = useState(listData);
  return (
    <>
      <Divider orientation="left">New Tab</Divider>
      <DataContext.Provider value={markList}>
        <Marks />
      </DataContext.Provider>
      <Divider orientation="left">Hello Dida365</Divider>
      <Dida />
    </>
  )
}