import { ViewCardsBox } from "./ViewCardsBox";

export function ViewCard() {
  return (
    <div className=" grid grid-rows-5 h-[447px] 2xl:h-[749px]">
      <ViewCardsBox />
      <ViewCardsBox />
      <ViewCardsBox />
      <ViewCardsBox />
      <ViewCardsBox />
    </div>
  );
}
