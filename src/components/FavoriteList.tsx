import { IoMdMore } from "react-icons/io";

const FavoriteList = () => {
  return (
    <li className=" h-[6.5rem]  rounded-sm cursor-pointer flex items-center px-2 border-stone-700 gap-3">
      <div className=" h-full w-[5rem] overflow-hidden py-2 flex-shrink-0">
        <div className=" w-full h-full bg-stone-700  rounded-sm"></div>
      </div>
      <div className=" flex items-center w-full h-full border-b border-stone-600">
        <div className=" h-full py-2 w-full flex flex-col ">
          <h1 className=" text-base font-semibold text-stone-300">
            Everyday Normal Guy 2
          </h1>
          <p className=" text-stone-400 text-xs">Jon Lajoie</p>
          <div className=" mt-auto bg-stone-900 h-6 w-10 rounded-sm flex items-center justify-center">
            <h1 className=" text-sm text-white font-semibold cursor-pointer">
              Tv
            </h1>
          </div>
        </div>
        <div className=" mr-auto text-white h-full flex flex-col justify-between py-2">
          <div className=" h-5 w-5 bg-stone-600 rounded-sm flex items-center justify-center">
            <p className=" text-stone-300 font-semibold text-xs">E</p>
          </div>
          <IoMdMore className=" text-xl text-stone-400" />
        </div>
      </div>
    </li>
  );
};

export default FavoriteList;
