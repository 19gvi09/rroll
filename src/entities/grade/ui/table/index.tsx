"use client"

import {Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {GradeRead} from "@/shared/types";
import {FC} from "react";

interface IGradesTableProps {
  data: GradeRead[]
  additionalColumns: ColumnsType<GradeRead>
}

export const GradesTable: FC<IGradesTableProps> = ({data, additionalColumns = []}) => {
  const columns: ColumnsType<GradeRead> = [
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
    ...additionalColumns
  ]
  return (
    <Table columns={columns} dataSource={data} />
  )
}