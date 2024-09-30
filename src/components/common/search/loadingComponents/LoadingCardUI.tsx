import { dummyLoadingData } from "../../../../api/dummyApi";
import { CardsUI } from "./CardsUI";
import { CardUI } from "./CardUI";

export function LoadingCardUI() {
  return (
    <CardUI>
      {dummyLoadingData.map((item) => (
        <CardsUI detailId="" key={item.id} className=" bg-[#161616] p-3">
          <div className=" h-[70%] w-full bg-[#333333] rounded-md animate-pulse flex items-center justify-center">
            <h1 className=" text-stone-500 font-semibold text-lg"></h1>
          </div>
          <div className=" flex flex-col w-full flex-1 animate-pulse gap-2 ">
            <div className=" h-[30%] w-[75%]  bg-[#333333] rounded-xl"></div>
            <div className=" h-[30%] w-[90%]  bg-[#333333] rounded-xl"></div>
            <div className=" h-[30%] w-[60%]  bg-[#333333] rounded-xl"></div>
          </div>
        </CardsUI>
      ))}
    </CardUI>
  );
}
