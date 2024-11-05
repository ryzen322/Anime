import { TrendingAnimeObj } from "../types";

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
