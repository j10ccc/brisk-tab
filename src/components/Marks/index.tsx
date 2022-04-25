import { useState, useContext } from "react"
import { List, Space, Tag } from "antd"
import { DataContext } from "../../App"

function Header() {
  return (
    <h2>常用网站</h2>
  )
}
function Footer() {
  return (
    <Tag color={'red'}>dev</Tag>
  )
}
export default function Marks() {
  const markList = useContext(DataContext)
  console.log(markList)
  return (
    <List
      header={<Header></Header>}
      footer={<Footer></Footer>}
      bordered
      dataSource={markList}
      renderItem={item => (
        <List.Item>
          <Space>
            <Tag>{item.tag}</Tag>
            {item.name}
            <a href={item.url}>{item.url}</a>

          </Space>
        </List.Item>
      )
      }
    ></List>
  )
}