"use client"

import {Button, Form, Input, Modal} from "antd";
import {FC, useState, useTransition} from "react";
import {GradeCreateUpdate} from "@/shared/types";
import {updateGradeServerAction} from "@/features/grade/update/actions";
import {EditOutlined} from "@ant-design/icons";
import {useSession} from "next-auth/react";

interface IUpdateGradeModalProps {
  grade: GradeCreateUpdate
}

export const UpdateGradeModal: FC<IUpdateGradeModalProps> = ({grade}) => {
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
      updateGradeServerAction({body: values, token: session.data.access_token})
        .then()
        .catch(() => {
          form.resetFields()
        })
    })
    setOpen(false)
  }
  return (
    <>
      <Button onClick={() => setOpen(true)} icon={<EditOutlined />} />
      <Modal open={open} title="Редактировать грейд" onCancel={cancel} onOk={() => form.submit()}>
        <Form layout="vertical" initialValues={grade} form={form} onFinish={submit}>
          <Form.Item name="id" hidden label="Название" rules={[{required: true, message: "Введите название!"}]}>
            <Input placeholder="Название" />
          </Form.Item>
          <Form.Item name="name" label="Название" rules={[{required: true, message: "Введите название!"}]}>
            <Input placeholder="Название" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}