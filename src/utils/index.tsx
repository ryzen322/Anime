import { Row } from "@/interface/database";
import { AnimeObj, TrendingAnimeObj } from "../types";

export const fakeArray = Array.from({ length: 10 }, (_, index) => index + 1);
export const loadingItem = Array.from({ length: 15 }, (_, index) => {
  return {
    id: index + 1,
    year: Number(`20${index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}`),
  };
});

export const divideArray = (trendingArr: TrendingAnimeObj[] | undefined) => {
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

interface existingItem extends AnimeObj {
  collection: (string | null)[];
}

export function existingItem(
  arr1: AnimeObj[],
  arr2: Row<"favorites">[]
): existingItem[] {
  if (arr2 === undefined) {
    return arr1.map((item) => {
      return {
        ...item,
        collection: [""],
      };
    });
  } else {
    const item = arr1.map((item) => {
      const collections = arr2
        .filter((data) => data.anime_id === item.id)
        .map((item) => item.collection);

      if (collections) {
        return {
          ...item,
          collection: collections,
        };
      }
      return {
        ...item,
        collection: [""],
      };
    });

    return item;
  }
}
