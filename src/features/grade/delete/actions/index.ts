"use server"

import {revalidateTag} from "next/cache";
import {deleteGrade, IGradeDeleteRequestVariables} from "@/shared/api";

export const deleteGradeServerAction = async ({id, token}: IGradeDeleteRequestVariables) => {
  try {
    const result = await deleteGrade({id, token})
    revalidateTag("getGrades")
    return result
  } catch (e) {
    throw e
  }
}