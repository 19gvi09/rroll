"use client"

import {Button, Form, Modal} from "antd";
import {FC, useState} from "react";
import {EditOutlined} from "@ant-design/icons";
import {TaskForm} from "@/entities/task";

interface IUpdateTaskModalProps {
  task: any
}

export const UpdateTaskModal: FC<IUpdateTaskModalProps> = ({task}) => {
  const [open, setOpen] = useState<boolean>(false)
  const [form] = Form.useForm()
  const cancel = () => {
    form.resetFields()
    setOpen(false)
  }
  const submit = async () => {
    try {
      const values = await form.validateFields()
      cancel()
    } catch (e) {

    }
  }
  return (
    <>
      <Button onClick={() => setOpen(true)} icon={<EditOutlined />} />
      <Modal title="Редактировать задачу" open={open} onCancel={cancel} onOk={submit}>
        <TaskForm initialValues={task} form={form} onFinish={submit} />
      </Modal>
    </>
  )
}