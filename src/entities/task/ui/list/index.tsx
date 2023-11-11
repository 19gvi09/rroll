"use client"

import {List} from "antd";

export const TasksList = () => {
  return (
    <List
      dataSource={[1, 2, 3]}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta title="List item title" description="List item description" />
          List item content
        </List.Item>
      )}
    />
  )
}