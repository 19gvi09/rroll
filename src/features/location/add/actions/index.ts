"use server"

import {revalidateTag} from "next/cache";
import {addLocation, ILocationCreateUpdateRequestVariables} from "@/shared/api";

export const addLocationServerAction = async ({body, token}: ILocationCreateUpdateRequestVariables) => {
  try {
    const result = addLocation({body, token})
    revalidateTag("getLocations")
    return result
  } catch (e) {
    throw e
  }
}