"use server"

import {revalidateTag} from "next/cache";
import {deleteGrade, deleteLocation, IGradeDeleteRequestVariables, ILocationDeleteRequestVariables} from "@/shared/api";

export const deleteLocationServerAction = async ({id, token}: ILocationDeleteRequestVariables) => {
  try {
    const result = await deleteLocation({id, token})
    revalidateTag("getLocations")
    return result
  } catch (e) {
    throw e
  }
}