"use client"

import {Button, Form, Modal} from "antd";
import {FC, useState} from "react";
import {EditOutlined} from "@ant-design/icons";
import {PointForm} from "@/entities/point";
import dayjs from "dayjs";

interface IUpdatePointModalProps {
  point: any
}

const formatInitialValue = (point) => {
  return {
    ...point,
    date_of_connection_of_the_point: dayjs(point.date_of_connection_of_the_point, "DD.MM.YYYY"),
    date_of_issue_of_the_last_card: dayjs(point.date_of_issue_of_the_last_card, "DD.MM.YYYY")
  }
}

export const UpdatePointModal: FC<IUpdatePointModalProps> = ({point}) => {
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
      <Modal title="Редактировать точку" open={open} onCancel={cancel} onOk={() => form.submit()}>
        <PointForm initialValues={formatInitialValue(point)} form={form} onFinish={submit} />
      </Modal>
    </>
  )
}