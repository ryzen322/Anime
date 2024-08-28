import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { AnimeObj } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const divideArray = (trendingArr: AnimeObj[] | undefined) => {
  if (trendingArr) {
    const numSubArrays = 3;

    const subArraySize = trendingArr.length / numSubArrays;

    const slicedArray = [];
    for (let i = 0; i < trendingArr.length; i += subArraySize) {
      slicedArray.push(trendingArr.slice(i, i + subArraySize));
    }
    const [item1, item2, item3] = slicedArray;

    const listOfMovie = [
      { title: "Top Sellers", id: "1", item: item1 },
      { title: "Most Played", id: "2", item: item2 },
      { title: "Wishlisted", id: "3", item: item3 },
    ];

    return listOfMovie;
  }
};
