"use client"

import {Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {FC} from "react";
import {UserRead} from "@/shared/types";

interface IEmployeesTableProps {
  data: UserRead[]
  additionalColumns?: ColumnsType<UserRead>
}

export const EmployeesTable: FC<IEmployeesTableProps> = ({data, additionalColumns = []}) => {
  const columns: ColumnsType<UserRead> = [
    {
      title: "ФИО",
      dataIndex: "name",
      key: "name",
      render: (text, record) => `${record.last_name} ${record.first_name} ${record.patronymic}`
    },
    ...additionalColumns
  ]
  return (
    <Table columns={columns} dataSource={data} />
  )
}