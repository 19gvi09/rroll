import {PointsPage} from "@/views/points";
import {PointRead} from "@/shared/types";
import {getPoints} from "@/shared/api";
import {auth} from "@/shared/nextauth";

const PointsPageDataLoader = async () => {
  const session = await auth()
  let points: PointRead[] = []
  await getPoints(session.access_token)
    .then(result => points = result)
  return <PointsPage points={points} />
}

export default PointsPageDataLoader