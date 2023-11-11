"use client"

import {Form, FormProps, Input, Select} from "antd";
import {FC} from "react";
import {GradeRead, RoleEnum} from "@/shared/types";

const roles: { label: string, value: RoleEnum }[] = [
  {
    label: "Менеджер",
    value: RoleEnum._0,
  },
  {
    label: "Сотрудник",
    value: RoleEnum._1,
  },
]

interface IEmployeeFormProps extends Pick<FormProps, "onFinish" | "initialValues" | "form"> {
  grades: GradeRead[]
}

export const EmployeeForm: FC<IEmployeeFormProps> = ({onFinish, initialValues, form, grades}) => {
  const role = Form.useWatch("role", form)
  return (
    <Form layout="vertical" autoComplete="off" form={form} onFinish={onFinish} initialValues={initialValues ? initialValues : {grade_id: 1}}>
      <Form.Item name="last_name" label="Фамилия" rules={[{required: true, message: "Введите фамилию"}]}>
        <Input />
      </Form.Item>
      <Form.Item name="first_name" label="Имя" rules={[{required: true, message: "Введите имя"}]}>
        <Input />
      </Form.Item>
      <Form.Item name="patronymic" label="Отчество" rules={[{required: true, message: "Введите отчество"}]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Электронная почта" rules={[{required: true, message: "Введите адрес электронной почты"}]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Пароль" rules={[{required: true, message: "Введите адрес электронной почты"}]}>
        <Input.Password />
      </Form.Item>
      <Form.Item name="role_id" hidden label="Роль" rules={[{required: true, message: "Выберите роль"}]}>
        <Select options={roles}/>
      </Form.Item>
      {
        role === RoleEnum._1 &&
        <Form.Item name="grade" label="Грейд" rules={[{required: true, message: "Выберите грейд"}]}>
          <Select options={grades.map(grade => ({label: grade.name, value: grade.id}))}/>
        </Form.Item>
      }
      <Form.Item name="location_id" label="Локация" rules={[{required: true, message: "Выберите локацию"}]}>
        <Select options={roles}/>
      </Form.Item>
    </Form>
  )
}