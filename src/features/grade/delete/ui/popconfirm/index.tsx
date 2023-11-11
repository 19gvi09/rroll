"use client"

import {Button, Popconfirm} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {GradeRead} from "@/shared/types";
import {FC, useTransition} from "react";
import {deleteGradeServerAction} from "@/features/grade/delete/actions";
import {useSession} from "next-auth/react";

interface IDeleteGradePopconfirmProps {
  grade: GradeRead
}

export const DeleteGradePopconfirm: FC<IDeleteGradePopconfirmProps> = ({grade}) => {
  const [isPending, startTransition] = useTransition()
  const session = useSession()
  const confirm = () => {
    startTransition(() => {
      deleteGradeServerAction({id: grade.id as string, token: session.data.access_token})
    })
  }
  const cancel = () => {

  }
  return (
    <Popconfirm
      title="Удалить сотрудника"
      description={`Вы уверены, что хотите удалить грейд "${grade.name}"?`}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Да"
      cancelText="Нет"
    >
      <Button icon={<DeleteOutlined />} />
    </Popconfirm>
  )
}