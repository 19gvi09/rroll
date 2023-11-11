"use client"

import {Button, Form, Modal} from "antd";
import {useState} from "react";
import {PointForm} from "@/entities/point";

export const AddPointModal = () => {
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
      <Button onClick={() => setOpen(true)}>Добавить точку</Button>
      <Modal title="Добавить точку" open={open} onCancel={cancel} onOk={submit}>
        <PointForm form={form} onFinish={submit} />
      </Modal>
    </>
  )
}