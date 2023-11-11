"use client"
import {deleteUser, IUserDeleteRequestVariables, register} from "@/shared/api";
import {revalidateTag} from "next/cache";

export const deleteEmployeeServerAction = async ({id, token}: IUserDeleteRequestVariables) => {
  try {
    const result = await deleteUser({id, token})
    revalidateTag("getEmployees")
    return result
  } catch (e) {
    throw e
  }
}