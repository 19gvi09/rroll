"use client"

import {Button, Form, Modal} from "antd";
import {FC, useState, useTransition} from "react";
import {EditOutlined} from "@ant-design/icons";
import {PointForm} from "@/entities/point";
import dayjs, {Dayjs} from "dayjs";
import {useSession} from "next-auth/react";
import {updatePointServerAction} from "@/features/points/update/actions";
import {PointCreateUpdate, PointRead} from "@/shared/types";

interface IUpdatePointModalProps {
  point: any
}

interface IPointFormValues extends PointCreateUpdate {
  date_of_connection_of_the_point: Dayjs,
  date_of_issue_of_the_last_card: Dayjs
}

const formatInitialValue = (point: PointRead): IPointFormValues => {
  return {
    ...point,
    date_of_connection_of_the_point: dayjs(point.date_of_connection_of_the_point),
    date_of_issue_of_the_last_card: dayjs(point.date_of_issue_of_the_last_card)
  }
}

const formatFormValues = (values: IPointFormValues): PointCreateUpdate => {
  return {
    ...values,
    date_of_connection_of_the_point: values.date_of_connection_of_the_point.startOf("day").toISOString(),
    date_of_issue_of_the_last_card: values.date_of_issue_of_the_last_card.startOf("day").toISOString(),
    is_materials_delivered: !!values.is_materials_delivered
  }
}

export const UpdatePointModal: FC<IUpdatePointModalProps> = ({point}) => {
  const [open, setOpen] = useState<boolean>(false)
  const [form] = Form.useForm()
  const [isPending, startTransition] = useTransition()
  const session = useSession()
  const cancel = () => {
    form.resetFields()
    setOpen(false)
  }
  const submit = (values: IPointFormValues) => {
    console.log(values)
    startTransition(() => {
      updatePointServerAction({body: formatFormValues(values), token: session.data.access_token})
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
      <Modal title="Редактировать точку" open={open} onCancel={cancel} onOk={() => form.submit()}>
        <PointForm initialValues={formatInitialValue(point)} form={form} onFinish={submit} />
      </Modal>
    </>
  )
}