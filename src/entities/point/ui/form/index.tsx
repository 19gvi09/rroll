"use client"

import {Checkbox, DatePicker, Form, FormProps, Input, InputNumber} from "antd";
import {FC} from "react";

const defaultValues = {
  isMaterialsDelivered: false,
  numberOfApprovedRequests: 0,
  numberOfCardsIssued: 0,
}

interface IPointFormProps extends Pick<FormProps, "onFinish" | "initialValues" | "form"> {

}

export const PointForm: FC<IPointFormProps> = ({onFinish, initialValues, form}) => {
  return (
    <Form layout="vertical" autoComplete="off" form={form} onFinish={onFinish} initialValues={initialValues ? initialValues : defaultValues}>
      <Form.Item name="address" label="Адрес" rules={[{required: true, message: "Введите адрес"}]}>
        <Input />
      </Form.Item>
      <Form.Item name="date_of_connection_of_the_point" label="Дата подключения точки" rules={[{required: true, message: "Введите дату подключения точки"}]}>
        <DatePicker />
      </Form.Item>
      <Form.Item name="is_materials_delivered" label="Карты и материалы доставлены?">
        <Checkbox />
      </Form.Item>
      <Form.Item name="date_of_issue_of_the_last_card" label="Дата последней выдачи карты">
        <DatePicker />
      </Form.Item>
      <Form.Item name="number_of_approved_requests" label="Количество одобренных заявок">
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item name="number_of_cards_issued" label="Количество выданных карт">
        <InputNumber min={0} />
      </Form.Item>
    </Form>
  )
}