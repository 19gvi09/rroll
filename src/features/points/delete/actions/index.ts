"use server"

import {addPoint, deletePoint, IPointCreateUpdateRequestVariables, IPointDeleteRequestVariables} from "@/shared/api";
import {revalidateTag} from "next/cache";

export const deletePointServerAction = async ({id, token}: IPointDeleteRequestVariables) => {
  try {
    const result = await deletePoint({id, token})
    revalidateTag("getPoints")
    return result
  } catch (e) {
    throw e
  }
}