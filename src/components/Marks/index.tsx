import React from "react";
import { Table, Tag } from "antd";
import { Website } from "@types";

function Header() {
  return <h2>常用网站</h2>;
}
function Footer() {
  return <Tag color={"red"}>dev</Tag>;
}
export default function Marks(props: any) {
  const markList: Website[] = props.markList;
  const colums = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Tag",
      dataIndex: "tag",
      key: "tag",
      render: (text: string) => <Tag>{text}</Tag>
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
      render: (text: string) => <a href={text}> {text}</a>
    }
  ];
  return (
    <Table
      bordered
      dataSource={markList}
      columns={colums}
      size="small"
      pagination={false}
    />
  );
}
