import {UserRead} from "@/shared/types";

export const getEmployees = async (token: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/employees/`, {
    next: {
      tags: ["getEmployees"]
    },
    headers: new Headers({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    })
  })
  if (response.ok) return await response.json() as UserRead[]
  throw response
}