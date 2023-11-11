"use server"

import {revalidateTag} from "next/cache";
import {addLocation, ILocationCreateUpdateRequestVariables, updateLocation} from "@/shared/api";

export const updateLocationServerAction = async ({body, token}: ILocationCreateUpdateRequestVariables) => {
  try {
    const result = updateLocation({body, token})
    revalidateTag("getLocations")
    return result
  } catch (e) {
    throw e
  }
}