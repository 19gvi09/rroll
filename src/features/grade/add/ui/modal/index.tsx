"use client"

import {Button, Form, Input, Modal} from "antd";
import {useState, useTransition} from "react";
import {GradeCreateUpdate} from "@/shared/types";
import {addGradeServerAction} from "@/features/grade/add/actions";
import {useSession} from "next-auth/react";

export const AddGradeModal = () => {
  const [isPending, startTransition] = useTransition()
  const [form] = Form.useForm()
  const [open, setOpen] = useState(false)
  const session = useSession()
  const cancel = () => {
    form.resetFields()
    setOpen(false)
  }
  const submit = (values: GradeCreateUpdate) => {
    startTransition(() => {
      addGradeServerAction({body: values, token: session.data.access_token})
    })
    cancel()
  }
  return (
    <>
      <Button onClick={() => setOpen(true)}>Добавить грейд</Button>
      <Modal open={open} title="Добавить грейд" onCancel={cancel} onOk={() => form.submit()}>
        <Form layout="vertical" form={form} onFinish={submit}>
          <Form.Item name="name" label="Название" rules={[{required: true, message: "Введите название!"}]}>
            <Input placeholder="Название" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}