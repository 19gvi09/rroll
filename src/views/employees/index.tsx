"use client"

import {EmployeesTable} from "@/entities/employee";
import {ColumnType} from "antd/es/table";
import {AddEmployeeModal, DeleteEmployeePopconfirm, UpdateEmployeeModal} from "@/features/employee";
import {FC} from "react";
import {GradeRead, UserRead} from "@/shared/types";

interface IEmployeesPageProps {
  employees: UserRead[]
  grades: GradeRead[]
}

export const EmployeesPage: FC<IEmployeesPageProps> = ({employees, grades}) => {
  const actionsColumn: ColumnType<UserRead> = {
    title: "Действия",
    dataIndex: "actions",
    key: "actions",
    render: (text, record) => (
      <>
        <UpdateEmployeeModal grades={grades} employee={record} />
        <DeleteEmployeePopconfirm employee={record} />
      </>
    )
  }
  return (
    <>
      <AddEmployeeModal grades={grades} />
      <EmployeesTable data={employees} additionalColumns={[actionsColumn]} />
    </>
  )
}