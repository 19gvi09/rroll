"use client"

import {Tabs, TabsProps} from "antd";
import {TasksListWithMap} from "@/widgets/tasks";
import {ProfileDescription} from "@/entities/profile";
import {useSession} from "next-auth/react";



export const ProfilePage = () => {
  const {data} = useSession()
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Персональная информация",
      children: (
        <ProfileDescription
          first_name={data?.user.first_name}
          last_name={data?.user.last_name}
          patronymic={data?.user.patronymic}
          role={data?.user.role}
        />
      ),
    },
    {
      key: "2",
      label: "Данные аккаунта",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Задачи",
      children: <TasksListWithMap />,
    },
  ];
  return (
    <>
      {JSON.stringify(data?.user)}
      <Tabs items={items} />
    </>
  )
}