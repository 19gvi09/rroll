import {UserRead} from "@/shared/types";

export const getViewer = async (token: string) => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/me/`, {
    method: "GET",
    headers: new Headers({
      "Authorization": `Bearer ${token}`
    })
  })
  if (result.ok) return await result.json() as UserRead
  throw result
}