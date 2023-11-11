"use server"

import {IGradeCreateUpdateRequestVariables, updateGrade} from "@/shared/api";
import {GradeCreateUpdate} from "@/shared/types";
import {revalidateTag} from "next/cache";

export const updateGradeServerAction = async ({body, token}: IGradeCreateUpdateRequestVariables) => {
  try {
    const result = await updateGrade({body, token})
    revalidateTag("getGrades")
    return result
  } catch (e) {
    throw e
  }
}