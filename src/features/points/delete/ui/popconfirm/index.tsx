"use client"

import {Button, Popconfirm} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

export const DeletePointPopconfirm = () => {
  const confirm = () => {

  }
  const cancel = () => {

  }
  return (
    <Popconfirm
      title="Удалить точку"
      description="Вы уверены, что хотите удалить точку?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Да"
      cancelText="Нет"
    >
      <Button icon={<DeleteOutlined />} />
    </Popconfirm>
  )
}