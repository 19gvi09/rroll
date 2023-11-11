"use client"

import {Button, Form, Modal} from "antd";
import {EmployeeForm} from "@/entities/employee";
import {FC, useState, useTransition} from "react";
import {GradeRead, UserCreateUpdate} from "@/shared/types";
import {addEmployeeServerAction} from "@/features/employee/add/actions";

interface IAddEmployeeModal {
  grades: GradeRead[]
}

export const AddEmployeeModal: FC<IAddEmployeeModal> = ({grades}) => {
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState<boolean>(false)
  const [form] = Form.useForm<UserCreateUpdate>()
  const cancel = () => {
    form.resetFields()
    setOpen(false)
  }
  const submit = async (values: UserCreateUpdate) => {
    startTransition(() => {
      addEmployeeServerAction({body: values})
        .then(() => {

        })
        .catch(() => {
          form.resetFields()
        })
    })
    setOpen(false)
  }
  return (
    <>
      <Button onClick={() => setOpen(true)}>Добавить сотрудника</Button>
      <Modal title="Добавить сотрудника" open={open} onCancel={cancel} onOk={() => form.submit()}>
        <EmployeeForm grades={grades} form={form} onFinish={submit} />
      </Modal>
    </>
  )
}