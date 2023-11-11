import {GradeRead, LocationRead} from "@/shared/types";
import {getGrades, getLocations} from "@/shared/api";
import {GradesPage} from "@/views/grades";
import {auth} from "@/shared/nextauth";
import {LocationsPage} from "@/views/locations";

const LocationsPageDataLoader = async () => {
  const session = await auth()
  let locations: LocationRead[] = []
  await getLocations(session.access_token)
    .then(result => {
      locations = result
    })
    .catch(error => {
    })
  return <LocationsPage locations={locations} />
}

export default LocationsPageDataLoader