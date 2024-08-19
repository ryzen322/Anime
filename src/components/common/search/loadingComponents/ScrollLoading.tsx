import { dummyLoadingData } from "../../../../api/dummyApi";

export function ScrollLoading() {
  return (
    <div className=" flex flex-col gap-3 md:flex-row">
      <div className=" w-full h-[30rem] bg-[#161616] rounded-lg flex flex-col p-4 gap-2 ">
        <div className=" w-full h-[75%] bg-[#333333] rounded-md animate-pulse"></div>
        <div className=" flex-1 grid grid-rows-3 gap-2 animate-pulse">
          <div className=" w-full bg-[#333333] rounded-lg"></div>
          <div className=" w-[75%] bg-[#333333] rounded-lg"></div>
          <div className=" w-[50%] bg-[#333333] rounded-lg"></div>
        </div>
      </div>
      <div className=" h-[2.5rem] w-full bg-[#333333] grid grid-col-6 gap-2 p-2 rounded-md animate-pulse md:w-[25%] md:h-[30rem] md:bg-[#161616]">
        {dummyLoadingData.slice(14).map((item) => (
          <div
            key={item.id}
            className=" hidden md:block bg-[#333333] rounded-md"
          ></div>
        ))}
      </div>
    </div>
  );
}
