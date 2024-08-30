import { TrendingAnimeObj } from "../types";
import Image from "./common/search/Image";
import CardsViewBox from "./common/search/loadingComponents/CardsViewBox";

export function ViewCardsBox(props: TrendingAnimeObj) {
  const { image, title, status } = props;

  return (
    <CardsViewBox className="">
      <div className=" w-[55px] h-full rounded-md shrink-0 overflow-hidden md:w-[48px]  xl:w-[60px] 2xl:w-[96px]">
        <Image src={image} className=" w-full h-full object-fill" alt="" />
      </div>
      <div className=" flex flex-col justify-center h-full gap-2 overflow-hidden">
        <p className=" text-white font-semibold truncate">{title.english}</p>
        <p className=" text-stone-300 font-semibold text-sm">
          Status: {status}
        </p>
      </div>
    </CardsViewBox>
  );
}
