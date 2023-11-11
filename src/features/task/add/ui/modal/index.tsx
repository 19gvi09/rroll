"use client"

import {Button, Form, Modal} from "antd";
import {useState} from "react";
import {TaskForm} from "@/entities/task";

export const AddTaskModal = () => {
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
      <Button onClick={() => setOpen(true)}>Добавить задачу</Button>
      <Modal title="Добавить задачу" open={open} onCancel={cancel} onOk={submit}>
        <TaskForm form={form} onFinish={submit} />
      </Modal>
    </>
  )
}