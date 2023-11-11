"use client"

import {EmployeesTable} from "@/entities/employee";
import {ColumnType} from "antd/es/table";
import {AddEmployeeModal, DeleteEmployeePopconfirm, UpdateEmployeeModal} from "@/features/employee";
import {FC} from "react";
import {GradeRead, LocationRead, UserRead} from "@/shared/types";
import {AddLocationModal, DeleteLocationPopconfirm, UpdateLocationModal} from "@/features/location";
import {LocationsTable} from "@/entities/location";

interface ILocationsPageProps {
  locations: LocationRead[]
}

export const LocationsPage: FC<ILocationsPageProps> = ({locations}) => {
  const actionsColumn: ColumnType<LocationRead> = {
    title: "Действия",
    dataIndex: "actions",
    key: "actions",
    render: (text, record) => (
      <>
        <UpdateLocationModal location={record} />
        <DeleteLocationPopconfirm location={record} />
      </>
    )
  }
  return (
    <>
      <AddLocationModal />
      <LocationsTable data={locations} additionalColumns={[actionsColumn]} />
    </>
  )
}