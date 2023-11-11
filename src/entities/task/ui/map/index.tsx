"use client"

import {Map} from "@pbe/react-yandex-maps";

export const TasksMap = () => {
  return (
    <>
      <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width="100%" />
    </>
  )
}