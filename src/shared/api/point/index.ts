import {GradeCreateUpdate, PointCreateUpdate, PointRead} from "@/shared/types";

export const getPoints = async (token: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/task/points/`, {
    next: {
      tags: ["getPoints"],
    },
    headers: new Headers({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    })
  })
  if (response.ok) return await response.json() as PointRead[]
  throw response
}

export interface IPointCreateUpdateRequestVariables {
  body: PointCreateUpdate
  token: string
}

export const addPoint = async ({body, token}: IPointCreateUpdateRequestVariables) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/task/point/`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: new Headers({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    })
  })
  if (response.ok) return await response.json() as PointRead[]
  throw response
}

export const updatePoint = async ({body, token}: IPointCreateUpdateRequestVariables) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/task/point/`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: new Headers({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    })
  })
  if (response.ok) return await response.json() as PointRead[]
  throw response
}

export interface IPointDeleteRequestVariables {
  id: string
  token: string
}

export const deletePoint = async ({id, token}: IPointDeleteRequestVariables) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/task/point/${id}/`, {
    method: "DELETE",
    headers: new Headers({
      "Authorization": `Bearer ${token}`,
    })
  })
  if (response.ok) return await response.json() as PointRead[]
  throw response
}