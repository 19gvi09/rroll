"use server"

import {addGrade, IGradeCreateUpdateRequestVariables} from "@/shared/api";
import {GradeCreateUpdate} from "@/shared/types";
import {revalidateTag} from "next/cache";

export const addGradeServerAction = async ({body, token}: IGradeCreateUpdateRequestVariables) => {
  try {
    const result = await addGrade({body, token})
    revalidateTag("getGrades")
    return result
  } catch (e) {
    throw e
  }
}