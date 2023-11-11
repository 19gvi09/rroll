"use client"
import {YMaps} from "@pbe/react-yandex-maps";
import {FC, PropsWithChildren} from "react";

export const YandexMapsProvider: FC<PropsWithChildren> = ({ children }) => {
  return <YMaps query={{ load: "package.full", apikey: "199253e4-5431-48b9-bed9-eb65cdd4b27f" }}>{children}</YMaps>
}