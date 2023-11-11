"use server"

import {addPoint, IPointCreateUpdateRequestVariables, updatePoint} from "@/shared/api";
import {revalidateTag} from "next/cache";

export const updatePointServerAction = async ({body, token}: IPointCreateUpdateRequestVariables) => {
  try {
    const result = await updatePoint({body, token})
    revalidateTag("getPoints")
    return result
  } catch (e) {
    throw e
  }
}