import CardViewBox from "./common/search/loadingComponents/CardViewBox";
import { ViewCardsBox } from "./ViewCardsBox";

export function ViewCard() {
  return (
    <CardViewBox className="">
      <ViewCardsBox />
      <ViewCardsBox />
      <ViewCardsBox />
      <ViewCardsBox />
      <ViewCardsBox />
    </CardViewBox>
  );
}
