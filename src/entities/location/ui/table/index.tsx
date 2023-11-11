"use client"

import {Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {FC} from "react";
import dayjs from "dayjs";
import {LocationRead} from "@/shared/types";

interface ILocationsTableProps {
  data: LocationRead[]
  additionalColumns?: ColumnsType<LocationRead>
}

export const LocationsTable: FC<ILocationsTableProps> = ({data, additionalColumns = []}) => {
  const columns: ColumnsType<LocationRead> = [
    {
      title: "Адрес",
      dataIndex: "address",
      key: "address",
    },
    ...additionalColumns
  ]
  return (
    <Table columns={columns} dataSource={data} />
  )
}