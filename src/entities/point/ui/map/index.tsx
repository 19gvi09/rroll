"use client"

import {GeoObject, Map, Placemark, useYMaps} from "@pbe/react-yandex-maps";
import {createRef, useEffect, useRef, useState} from "react";
import ymaps from "yandex-maps";

const Point = ({point}) => {
  const ymaps = useYMaps(["geocode"])
  const [cords, setCords] = useState<[string, string]>()
  useEffect(() => {
    if (!ymaps || !point) return
    ymaps.geocode(`г. Краснодар, ${point.address}`)
      .then(result => {
        setCords(result.geoObjects.get(0).geometry._coordinates as [string, string])
      })
  }, [ymaps, point])
  return <Placemark geometry={cords} />
}

export const PointsMap = ({points}) => {
  const routeRef = useRef<ymaps.multiRouter.MultiRoute>()
  const [ymap, setYmap] = useState<typeof ymaps>()
  const [map, setMap] = useState<ymaps.Map>()

  useEffect(() => {
    if (!ymap || !map) return
    const multiRoute = new ymap.multiRouter.MultiRoute(
      {
        // Описание опорных точек мультимаршрута.
        referencePoints: ["Краснодар", "Москва", "Тверь"],
        // Параметры маршрутизации.
        params: {
          // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
          results: 2
        }
      },
      {
        boundsAutoApply: true
      }
    );
    multiRoute.editor.stop();
    if (routeRef.current) map.geoObjects.remove(routeRef.current)
    routeRef.current = multiRoute
    map.geoObjects.add(multiRoute)
  }, [ymap, map])

  return (
    <>
      <Map
        modules={["multiRouter.MultiRoute"]}
        defaultState={{ center: [45.035470, 38.975313], zoom: 9 }}
        width="100%" height="500px"
        instanceRef={ref => setMap(ref)}
        onLoad={api => setYmap(api)}
      >
        {false && points.map(point => <Point key={point.id} point={point} />)}
      </Map>
    </>
  )
}

//