import {PointRead} from "@/shared/types";

export const getPoints = async () => {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/task/points`, {
      next: {
        tags: ["getPoints"]
      }
    })
    return await result.json() as {items: PointRead[]}
  } catch (e) {
    throw e
  }
}