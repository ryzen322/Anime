import { loadingItem } from "../../../../utils";

const NewsHeaderLoading = () => {
  return (
    <div className=" w-full flex flex-col gap-2 px-2 mb-2 animate-pulse">
      <div className=" flex flex-col gap-2">
        <div className=" h-[1.5rem] w-[5rem] bg-stone-700 rounded-sm" />
        <div className=" h-[1.5rem] w-[20rem] bg-stone-700 rounded-sm" />
      </div>
      <div className=" flex flex-col justify-between gap-2 md:flex-row md:gap-3">
        <div className=" w-full h-[15rem] bg-stone-700 phoneX:h-[40rem] md:w-[22rem] md:min-w-[22rem]" />
        <div className=" w-full flex flex-col gap-2">
          <div className=" flex flex-col gap-2 w-full">
            <div className=" h-[1.5rem] w-[5rem] bg-stone-700 rounded-sm" />
            <div className=" h-[1.5rem] w-[50%] bg-stone-700 rounded-sm" />
          </div>
          <div className=" w-full flex flex-col gap-2">
            <div className=" h-[1.5rem] w-[65%] bg-stone-700 rounded-sm" />
            <div className=" h-[1.5rem] w-[70%] bg-stone-700 rounded-sm" />
            <div className=" h-[1.5rem] w-[75%] bg-stone-700 rounded-sm" />
            <div className=" h-[1.5rem] w-[80%] bg-stone-700 rounded-sm" />
            <div className=" h-[1.5rem] w-[85%] bg-stone-700 rounded-sm" />
            <div className=" h-[1.5rem] w-[90%] bg-stone-700 rounded-sm" />
            <div className=" h-[1.5rem] w-[95%] bg-stone-700 rounded-sm" />
          </div>
          <div className=" flex items-center overflow-x-scroll no-scrollbar h-[7.5rem] w-full gap-1">
            {loadingItem.map((item) => (
              <div
                key={item.id}
                className="min-w-[6rem] h-full bg-stone-700 rounded-md"
              />
            ))}
          </div>
          <div className=" flex items-center overflow-x-scroll no-scrollbar h-[7.5rem] w-full gap-1">
            {loadingItem.map((item) => (
              <div
                key={item.id}
                className="min-w-[6rem] h-full bg-stone-700 rounded-md"
              />
            ))}
          </div>
          <div className=" w-full h-[2.25rem] flex justify-between  items-center mt-auto">
            <div className=" h-full w-[2rem] bg-stone-700 rounded-sm" />
            <div className=" h-full w-[2rem] bg-stone-700 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHeaderLoading;
