import { dummyData } from "../../../../api/dummyApi";
import CardListBoxLoading from "./CardListBoxLoading";
import CardsViewBox from "./CardsViewBox";
import CardViewBox from "./CardViewBox";

const CardList = () => {
  const dummy = dummyData(5);

  return (
    <CardListBoxLoading className="">
      <CardViewBox className="gap-1">
        {dummy.map((item) => (
          <CardsViewBox className=" bg-[#333333] animate-pulse " key={item.id}>
            <div className=" w-[64px] h-full bg-stone-300 rounded-md shrink-0 md:w-[48px]  xl:w-[60px] 2xl:w-[96px]"></div>
            <div className=" flex flex-col justify-center h-full gap-2 overflow-hidden w-full">
              <div className=" h-[40%] w-full  bg-stone-300  rounded-sm"></div>
              <div className=" h-[40%] w-3/4 bg-stone-300 rounded-sm"></div>
            </div>
          </CardsViewBox>
        ))}
      </CardViewBox>
    </CardListBoxLoading>
  );
};

export default CardList;
