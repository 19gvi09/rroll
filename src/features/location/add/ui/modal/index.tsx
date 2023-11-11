"use client"

import {Button, Form, Input, Modal} from "antd";
import {useState, useTransition} from "react";
import {LocationCreateUpdate} from "@/shared/types";
import {useSession} from "next-auth/react";
import {updateLocationServerAction} from "@/features/location/update/actions";
import {addLocationServerAction} from "@/features/location/add/actions";

export const AddLocationModal = () => {
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
      addLocationServerAction({body: values, token: session.data.access_token})
        .then()
        .catch(() => {
          form.resetFields()
        })
    })
    setOpen(false)
  }
  return (
    <>
      <Button onClick={() => setOpen(true)}>Добавить локацию</Button>
      <Modal title="Добавить локацию" open={open} onCancel={cancel} onOk={() => form.submit()}>
        <Form layout="vertical" autoComplete="off" form={form} onFinish={submit}>
          <Form.Item name="address" label="Адрес" rules={[{required: true, message: "Введите адрес"}]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}