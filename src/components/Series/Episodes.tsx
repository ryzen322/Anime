import { useContext } from "react";
import { ContextEpisode } from "../store/store";

const fakeArray = Array.from({ length: 30 }, (_, index) => index + 1);

const Episodes = ({ className }: { className: string }) => {
  const { changeEpisode } = useContext(ContextEpisode);
  return (
    <div className={` w-full flex flex-col gap-4 ${className}`}>
      <ul className=" flex flex-wrap items-center gap-1 justify-center">
        {fakeArray.map((_, index) => (
          <li
            key={index}
            className=" rounded-md bg-stone-700/85 h-[3rem] w-[3rem] shadow-md cursor-pointer flex items-center justify-center flex-col flex-wrap text-stone-300 font-semibold hover:bg-stone-400"
            onClick={() => changeEpisode("arteezy")}
          >
            <h1 className=" text-sm">EP</h1>
            <p className=" text-xs">1089</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Episodes;
