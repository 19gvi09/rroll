"use client"

import {Button, Form, Input, Modal} from "antd";
import {FC, useState, useTransition} from "react";
import {LocationCreateUpdate, LocationRead} from "@/shared/types";
import {updateLocationServerAction} from "@/features/location/update/actions";
import {useSession} from "next-auth/react";
import {EditOutlined} from "@ant-design/icons";

interface IUpdateLocationModalProps {
  location: LocationRead
}

export const UpdateLocationModal: FC<IUpdateLocationModalProps> = ({location}) => {
  const [form] = Form.useForm()
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const session = useSession()
  const cancel = () => {
    form.resetFields()
    setOpen(false)
  }
  const submit = (values: LocationCreateUpdate) => {
    startTransition(() => {
      updateLocationServerAction({body: values, token: session.data.access_token})
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
      <Modal title="Редактировать локацию" open={open} onCancel={cancel} onOk={() => form.submit()}>
        <Form layout="vertical" autoComplete="off" form={form} onFinish={submit} initialValues={location}>
          <Form.Item name="address" label="Адрес" rules={[{required: true, message: "Введите адрес"}]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}