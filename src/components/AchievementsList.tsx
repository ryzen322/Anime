import { CharacterObj } from "../types";
import Image from "./common/search/Image";

const AchievementsList = (props: CharacterObj) => {
  const { image, name, role } = props;

  return (
    <li className=" h-[13rem] min-h-[13rem] w-[7rem] min-w-[7rem] rounded-sm flex flex-col gap-1 overflow-hidden shadow-md cursor-pointer z-30">
      <div className=" h-[75%] w-full bg-stone-500 rounded-md overflow-hidden">
        <Image src={image} className=" w-full h-full object-cover" />
      </div>
      <div className=" flex-1 flex flex-col items-center">
        <h1 className=" text-stone-300 text-xs font-semibold text-center">
          Name: {name.userPreferred}
        </h1>
        <p className=" text-stone-300 text-xs font-semibold">Role: {role}</p>
      </div>
    </li>
  );
};

export default AchievementsList;
