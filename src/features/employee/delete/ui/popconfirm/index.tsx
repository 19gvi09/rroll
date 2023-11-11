"use client"

import {Button, Popconfirm} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {UserRead} from "@/shared/types";
import {FC, useTransition} from "react";
import {deleteEmployeeServerAction} from "@/features/employee/delete/actions";
import {useSession} from "next-auth/react";

interface IDeleteEmployeePopconfirm {
  employee: UserRead
}

export const DeleteEmployeePopconfirm: FC<IDeleteEmployeePopconfirm> = ({employee}) => {
  const [isPending, startTransition] = useTransition()
  const session = useSession()
  const confirm = () => {
    startTransition(() => {
      deleteEmployeeServerAction({id: employee.id, token: session.data.access_token})
    })
  }
  const cancel = () => {

  }
  return (
    <Popconfirm
      title="Удалить сотрудника"
      description={`Вы уверены, что хотите удалить сотрудника ${employee.last_name} ${employee.first_name} ${employee.patronymic}?`}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Да"
      cancelText="Нет"
    >
      <Button icon={<DeleteOutlined />} />
    </Popconfirm>
  )
}