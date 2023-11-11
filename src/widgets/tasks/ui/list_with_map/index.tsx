"use client"

import {TasksList, TasksMap} from "@/entities/task";

export const TasksListWithMap = () => {
  return (
    <>
      <TasksList />
      <TasksMap />
    </>
  )
}