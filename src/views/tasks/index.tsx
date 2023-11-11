"use client"

import {AddTaskModal, UpdateTaskModal, DeleteTaskPopconfirm} from "@/features/task";
import {TasksTable} from "@/entities/task";
import {ColumnType} from "antd/es/table";

export const TasksPage = () => {
  const actionsColumn: ColumnType<any> = {
    title: "Действия",
    dataIndex: "actions",
    key: "actions",
    render: (text, record) => (
      <>
        <UpdateTaskModal task={record} />
        <DeleteTaskPopconfirm />
      </>
    )
  }
  return (
    <>
      <AddTaskModal />
      <TasksTable data={[]} additionalColumns={[actionsColumn]} />
    </>
  )
}