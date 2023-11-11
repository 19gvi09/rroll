import {EmployeesPage} from "@/views/employees";
import {GradeRead, LocationRead, UserRead} from "@/shared/types";
import {getEmployees, getGrades, getLocations} from "@/shared/api";
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

  let locations: LocationRead[] = []
  await getLocations(session.access_token)
    .then(result => {
      locations = result
    })
    .catch(error => {
    })
  return <EmployeesPage employees={employees} grades={grades} locations={locations} />
}

export default EmployeesPageDataLoader