import {GradeCreateUpdate, GradeRead, LocationCreateUpdate, LocationRead} from "@/shared/types";

export const getLocations = async (token: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/locations/`, {
    method: "GET",
    next: {
      tags: ["getLocations"]
    },
    headers: new Headers({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    })
  })
  if (response.ok) return await response.json() as LocationRead[]
  throw response
}

export interface ILocationCreateUpdateRequestVariables {
  body: LocationCreateUpdate
  token: string
}

export const addLocation = async ({body, token}: ILocationCreateUpdateRequestVariables) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/location/`, {
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

export const updateLocation = async ({body, token}: ILocationCreateUpdateRequestVariables) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/location/`, {
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

export interface ILocationDeleteRequestVariables {
  id: string
  token: string
}

export const deleteLocation = async ({id, token}: ILocationDeleteRequestVariables) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/location/${id}/`, {
    method: "DELETE",
    headers: new Headers({
      "Authorization": `Bearer ${token}`
    })
  })
  if (response.ok) return await response.json() as string
  throw response
}