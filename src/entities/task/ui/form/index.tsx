"use client"

import {Form, FormProps, Input, Select} from "antd";
import {FC} from "react";

interface ITaskFormProps extends Pick<FormProps, "onFinish" | "initialValues" | "form"> {

}

export const TaskForm: FC<ITaskFormProps> = ({onFinish, initialValues, form}) => {
  return (
    <Form layout="vertical" autoComplete="off" form={form} onFinish={onFinish} initialValues={initialValues}>
      <Form.Item name="name" label="Тип задачи" rules={[{required: true, message: "Выберите тип задачи"}]}>
        <Select />
      </Form.Item>
      <Form.Item name="point_id" label="Адрес" rules={[{required: true, message: "Выберите адрес"}]}>
        <Select />
      </Form.Item>
      <Form.Item name="executor_id" label="Исполнитель" rules={[{required: true, message: "Выберите исполнителя"}]}>
        <Select />
      </Form.Item>
    </Form>
  )
}