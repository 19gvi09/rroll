"use client"

import {Descriptions} from "antd";

export const ProfileDescription = ({first_name, last_name, patronymic, role, grade}) => {
  return (
    <Descriptions bordered>
      <Descriptions.Item span={3} label="ФИО">{`${last_name} ${first_name} ${patronymic}`}</Descriptions.Item>
      <Descriptions.Item span={3} label="Роль">{role}</Descriptions.Item>
      {role === "employee" && <Descriptions.Item span={3} label="Грейд">{grade}</Descriptions.Item>}
    </Descriptions>
  )
}