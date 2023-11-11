"use client"

import {Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {FC} from "react";
import dayjs from "dayjs";

interface IPointsTableProps {
  data: any[]
  additionalColumns?: ColumnsType<any>
}

export const PointsTable: FC<IPointsTableProps> = ({data, additionalColumns = []}) => {
  const columns: ColumnsType<any> = [
    {
      title: "Адрес",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Дата подключения точки",
      dataIndex: "date_of_connection_of_the_point",
      key: "date_of_connection_of_the_point",
      render: (text) => {
        const date = dayjs(text)
        return `${date.format("DD.MM.YYYY")} (${dayjs().diff(date, "d")} дней)`
      }
    },
    {
      title: "Карты и материалы доставлены?",
      dataIndex: "is_materials_delivered",
      key: "is_materials_delivered",
      render: (text) => text ? "Да" : "Нет"
    },
    {
      title: "Дата последней выдачи карты",
      dataIndex: "date_of_issue_of_the_last_card",
      key: "date_of_issue_of_the_last_card",
      render: (text) => {
        const date = dayjs(text)
        return `${date.format("DD.MM.YYYY")} (${dayjs().diff(date, "d")} дней)`
      }
    },
    {
      title: "Количество одобренных заявок",
      dataIndex: "number_of_approved_requests",
      key: "number_of_approved_requests",
    },
    {
      title: "Количество выданных карт",
      dataIndex: "number_of_cards_issued",
      key: "number_of_cards_issued",
    },
    ...additionalColumns
  ]
  return (
    <Table columns={columns} dataSource={data} />
  )
}