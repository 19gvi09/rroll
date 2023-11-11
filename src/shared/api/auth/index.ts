import {BearerResponse, Body_auth_jwt_login_api_auth_jwt_login_post, UserCreateUpdate} from "@/shared/types";

export const login = async ({body}: {body: Body_auth_jwt_login_api_auth_jwt_login_post}) => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/jwt/login/`, {
    method: "POST",
    body: new URLSearchParams(Object.entries(body)).toString(),
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded"
    }),
  })
  if (result.ok) return await result.json() as BearerResponse
  throw result
}

export const logout = async (token: string) => {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/jwt/logout/`, {
      method: "POST",
      headers: new Headers({
        "Authorization": `Bearer ${token}`
      })
    })
    return await result.json() as string
  } catch (e) {
    throw e
  }
}

export const register = async ({body}: {body: UserCreateUpdate}) => {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/api/register/`, {
      method: "POST",
      body: JSON.stringify(body)
    })
    return await result.json() as string
  } catch (e) {
    throw e
  }
}