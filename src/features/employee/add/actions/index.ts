"use server"

import {UserCreateUpdate} from "@/shared/types";
import {register} from "@/shared/api";
import {revalidateTag} from "next/cache";

export const addEmployeeServerAction = async ({body}: {body: UserCreateUpdate}) => {
  try {
    const result = await register({body})
    revalidateTag("getEmployees")
    return result
  } catch (e) {
    throw e
  }
}