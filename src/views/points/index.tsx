"use client"

import {PointsMap, PointsTable} from "@/entities/point";
import {ColumnType} from "antd/es/table";
import {AddPointModal, DeletePointPopconfirm, UpdatePointModal} from "@/features/points";

export const PointsPage = ({points}) => {
  const actionsColumn: ColumnType<any> = {
    title: "Действия",
    dataIndex: "actions",
    key: "actions",
    render: (text, record) => (
      <>
        <UpdatePointModal point={record} />
        <DeletePointPopconfirm />
      </>
    )
  }
  return (
    <>
      <AddPointModal />
      <PointsTable data={points.map(point => ({...point, key: point.id}))} additionalColumns={[actionsColumn]} />
      <PointsMap points={points} />
    </>
  )
}