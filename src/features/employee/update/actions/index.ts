"use client"
import {
  deleteUser,
  IUserCreateUpdateRequestVariables,
  IUserDeleteRequestVariables,
  register,
  updateUser
} from "@/shared/api";
import {revalidateTag} from "next/cache";

export const updateEmployeeServerAction = async ({id, body, token}: IUserCreateUpdateRequestVariables) => {
  try {
    const result = await updateUser({id, body, token})
    revalidateTag("getEmployees")
    return result
  } catch (e) {
    throw e
  }
}