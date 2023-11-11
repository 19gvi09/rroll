import {GradeCreateUpdate, GradeRead} from "@/shared/types";

export const getGrades = async (token: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/grades/`, {
    method: "GET",
    next: {
      tags: ["getGrades"]
    },
    headers: new Headers({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    })
  })
  if (response.ok) return await response.json() as GradeRead[]
  throw response
}

export interface IGradeCreateUpdateRequestVariables {
  body: GradeCreateUpdate
  token: string
}

export const addGrade = async ({body, token}: IGradeCreateUpdateRequestVariables) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/grade/`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: new Headers({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    })
  })
  if (response.ok) return await response.json() as string
  throw response
}

export const updateGrade = async ({body, token}: IGradeCreateUpdateRequestVariables) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/grade/`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: new Headers({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    })
  })
  if (response.ok) return await response.json() as string
  throw response
}

export interface IGradeDeleteRequestVariables {
  id: string
  token: string
}

export const deleteGrade = async ({id, token}: IGradeDeleteRequestVariables) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/grade/${id}`, {
    method: "DELETE",
    headers: new Headers({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    })
  })
  if (response.ok) return await response.json() as string
  throw response
}