"use client"

import {Button, Popconfirm} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {FC, useTransition} from "react";
import {useSession} from "next-auth/react";
import {PointCreateUpdate, PointRead} from "@/shared/types";
import {deletePointServerAction} from "@/features/points/delete/actions";
import {Dayjs} from "dayjs";

interface IDeletePointPopconfirmProps {
  point: PointRead
}



export const DeletePointPopconfirm: FC<IDeletePointPopconfirmProps> = ({point}) => {
  const [isPending, startTransition] = useTransition()
  const session = useSession()
  const confirm = () => {
    startTransition(() => {
      deletePointServerAction({id: point.id, token: session.data.access_token})
    })
  }
  const cancel = () => {

  }
  return (
    <Popconfirm
      title="Удалить точку"
      description={`Вы уверены, что хотите удалить точку ${point.address}?`}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Да"
      cancelText="Нет"
    >
      <Button icon={<DeleteOutlined />} />
    </Popconfirm>
  )
}