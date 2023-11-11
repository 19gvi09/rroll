import {GradeRead} from "@/shared/types";
import {getGrades} from "@/shared/api";
import {GradesPage} from "@/views/grades";
import {auth} from "@/shared/nextauth";

const GradesPageDataLoader = async () => {
  const session = await auth()
  let grades: GradeRead[] = []
  const errors: any[] = []
  await getGrades(session.access_token)
    .then(result => {
      grades = result
    })
    .catch(error => {
      errors.push(JSON.stringify(error))
    })
  return <GradesPage grades={grades} errors={errors} />
}

export default GradesPageDataLoader