"use server"

import {addPoint, IPointCreateUpdateRequestVariables} from "@/shared/api";
import {revalidateTag} from "next/cache";

export const addPointServerAction = async ({body, token}: IPointCreateUpdateRequestVariables) => {
  try {
    const result = await addPoint({body, token})
    revalidateTag("getPoints")
    return result
  } catch (e) {
    throw e
  }
}