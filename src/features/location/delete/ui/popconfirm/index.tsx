"use client"

import {Button, Popconfirm} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {GradeRead, LocationRead} from "@/shared/types";
import {FC, useTransition} from "react";
import {deleteGradeServerAction} from "@/features/grade/delete/actions";
import {useSession} from "next-auth/react";
import {deleteLocationServerAction} from "@/features/location/delete/actions";

interface IDeleteLocationPopconfirmProps {
  location: LocationRead
}

export const DeleteLocationPopconfirm: FC<IDeleteLocationPopconfirmProps> = ({location}) => {
  const [isPending, startTransition] = useTransition()
  const session = useSession()
  const confirm = () => {
    startTransition(() => {
      deleteLocationServerAction({id: location.id as string, token: session.data.access_token})
    })
  }
  const cancel = () => {

  }
  return (
    <Popconfirm
      title="Удалить локацию"
      description={`Вы уверены, что хотите удалить локацию "${location.name}"?`}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Да"
      cancelText="Нет"
    >
      <Button icon={<DeleteOutlined />} />
    </Popconfirm>
  )
}