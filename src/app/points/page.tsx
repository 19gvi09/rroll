import {PointsPage} from "@/views/points";
import {PointRead} from "@/shared/types";
import {getPoints} from "@/shared/api";

const PointsPageDataLoader = async () => {
  let points: PointRead[] = []
  await getPoints()
    .then(result => points = result.items)
  return <PointsPage points={points} />
}

export default PointsPageDataLoader