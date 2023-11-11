"use client"

import {Button, Form, Modal} from "antd";
import {useState, useTransition} from "react";
import {PointForm} from "@/entities/point";
import {useSession} from "next-auth/react";
import {PointCreateUpdate} from "@/shared/types";
import {addPointServerAction} from "@/features/points/add/actions";
import {Dayjs} from "dayjs";

interface IPointFormValues extends PointCreateUpdate {
  date_of_connection_of_the_point: Dayjs,
  date_of_issue_of_the_last_card: Dayjs
}

const formatFormValues = (values: IPointFormValues): PointCreateUpdate => {
  return {
    ...values,
    date_of_connection_of_the_point: values.date_of_connection_of_the_point.startOf("day").toISOString(),
    date_of_issue_of_the_last_card: values.date_of_issue_of_the_last_card.startOf("day").toISOString(),
    is_materials_delivered: !!values.is_materials_delivered
  }
}

export const AddPointModal = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [form] = Form.useForm()
  const [isPending, startTransition] = useTransition()
  const session = useSession()
  const cancel = () => {
    form.resetFields()
    setOpen(false)
  }
  const submit = async (values: IPointFormValues) => {
    startTransition(() => {
      addPointServerAction({body: formatFormValues(values), token: session.data.access_token})
    })
    cancel()
  }
  return (
    <>
      <Button onClick={() => setOpen(true)}>Добавить точку</Button>
      <Modal title="Добавить точку" open={open} onCancel={cancel} onOk={() => form.submit()}>
        <PointForm form={form} onFinish={submit} />
      </Modal>
    </>
  )
}