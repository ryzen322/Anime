import { TrendingAnimeObj } from "../types";
import CardViewBox from "./common/search/loadingComponents/CardViewBox";
import { ViewCardsBox } from "./ViewCardsBox";

export function ViewCard({ item }: { item: TrendingAnimeObj[] }) {
  return (
    <CardViewBox className="">
      {item.map((data) => (
        <ViewCardsBox key={data.id} {...data} />
      ))}
    </CardViewBox>
  );
}
