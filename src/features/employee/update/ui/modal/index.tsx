"use client"

import {Button, Form, Modal} from "antd";
import {EmployeeForm} from "@/entities/employee";
import {FC, useState, useTransition} from "react";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import {EditOutlined} from "@ant-design/icons";
import {GradeRead, LocationRead, UserCreateUpdate} from "@/shared/types";
import {useSession} from "next-auth/react";
import {updateEmployeeServerAction} from "@/features/employee/update/actions";

interface IUpdateEmployeeModalProps {
  employee: any
  grades: GradeRead[]
  locations: LocationRead[]
}

export const UpdateEmployeeModal: FC<IUpdateEmployeeModalProps> = ({employee, grades, locations}) => {
  const [open, setOpen] = useState<boolean>(false)
  const [form] = Form.useForm()
  const session = useSession()
  const [isPending, startTransition] = useTransition()
  const cancel = () => {
    form.resetFields()
    setOpen(false)
  }
  const submit = async (values: UserCreateUpdate) => {
    startTransition(() => {
      updateEmployeeServerAction({id: employee.id, body: values, token: session.data.access_token})
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
      <Modal title="Редактировать сотрудника" open={open} onCancel={cancel} onOk={() => form.submit()}>
        <EmployeeForm grades={grades} initialValues={employee} form={form} onFinish={submit} locations={locations} />
      </Modal>
    </>
  )
}