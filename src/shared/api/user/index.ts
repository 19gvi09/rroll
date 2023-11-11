import {GradeCreateUpdate, GradeRead, UserCreateUpdate} from "@/shared/types";

export interface IUserCreateUpdateRequestVariables {
  id: string
  body: UserCreateUpdate
  token: string
}

export const updateUser = async ({id, body, token}: IUserCreateUpdateRequestVariables) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/${id}/`, {
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

export interface IUserDeleteRequestVariables {
  id: string
  token: string
}

export const deleteUser = async ({id, token}: IUserDeleteRequestVariables) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/${id}/`, {
    method: "DELETE",
    headers: new Headers({
      "Authorization": `Bearer ${token}`,
    })
  })
  if (response.ok) return await response.json() as string
  throw response
}