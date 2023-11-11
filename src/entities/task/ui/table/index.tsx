"use client"

import {Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {FC} from "react";

interface ITasksTableProps {
  data: any[]
  additionalColumns?: ColumnsType<any>
}

export const TasksTable: FC<ITasksTableProps> = ({data, additionalColumns = []}) => {
  const columns: ColumnsType<any> = [
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    ...additionalColumns
  ]
  return (
    <Table columns={columns} dataSource={data} />
  )
}