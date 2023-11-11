import {EmployeesPage} from "@/views/employees";
import {GradeRead, UserRead} from "@/shared/types";
import {getEmployees, getGrades} from "@/shared/api";
import {auth} from "@/shared/nextauth";

const EmployeesPageDataLoader = async () => {
  const session = await auth()
  let employees: UserRead[] = []
  let grades: GradeRead[] = []

  await getEmployees(session.access_token)
    .then(result => {
      employees = result
    })
    .catch(error => {

    })

  await getGrades(session.access_token)
    .then(result => {
      grades = result
    })
    .catch(error => {

    })
  return <EmployeesPage employees={employees} grades={grades} />
}

export default EmployeesPageDataLoader