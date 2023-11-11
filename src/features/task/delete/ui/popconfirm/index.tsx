"use client"

import {Button, Popconfirm} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

export const DeleteTaskPopconfirm = () => {
  const confirm = () => {

  }
  const cancel = () => {

  }
  return (
    <Popconfirm
      title="Удалить задачу"
      description="Вы уверены, что хотите удалить задачу?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Да"
      cancelText="Нет"
    >
      <Button icon={<DeleteOutlined />} />
    </Popconfirm>
  )
}