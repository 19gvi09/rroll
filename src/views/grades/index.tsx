"use client"

import {AddGradeModal, DeleteGradePopconfirm, UpdateGradeModal} from "@/features/grade";
import {GradesTable} from "@/entities/grade";
import {GradeRead} from "@/shared/types";
import {FC} from "react";
import {ColumnType} from "antd/es/table";

interface IGradesPageProps {
  grades: GradeRead[]
  errors: Response[]
}

export const GradesPage: FC<IGradesPageProps> = ({grades, errors}) => {
  const actionsColumn: ColumnType<GradeRead> = {
    title: "Действия",
    dataIndex: "actions",
    key: "actions",
    render: (text, record) => (
      <>
        <UpdateGradeModal grade={record} />
        <DeleteGradePopconfirm grade={record} />
      </>
    )
  }
  return (
    <>
      <AddGradeModal />
      <GradesTable data={grades} additionalColumns={[actionsColumn]} />
    </>
  )
}