import { useState } from "react";
import { CharacterObj } from "../types";
import AchievementsList from "./AchievementsList";

export function Achievements({ char }: { char: CharacterObj[] | undefined }) {
  const [viewmore, setViewmore] = useState(false);

  return (
    <div className=" flex flex-col gap-4">
      <h1 className=" text-white text-xl font-bold">Available Achievements</h1>
      <ul
        className={` w-full flex justify-center flex-wrap gap-2 relative transition-all duration-200 ease-in-out ${
          viewmore ? " h-auto pb-4 " : " h-[15rem]"
        }  relative overflow-hidden`}
      >
        {char?.map((item) => (
          <AchievementsList
            key={item.id}
            image={item.image}
            role={item.role}
            name={item.name}
            id={item.id}
            imageHash={item.imageHash}
            voiceActors={item.voiceActors}
          />
        ))}
        <div
          className={`absolute w-full h-full top-0 left-0 bottom-0 flex flex-col justify-end ${
            !viewmore
              ? " bg-gradient-to-b from-[#101014]/10 to-[#101014] z-40"
              : ""
          }
          }`}
        >
          <button
            className=" text-blue-400 cursor-pointer font-semibold "
            onClick={() => setViewmore(!viewmore)}
          >
            {viewmore ? "show less" : "show more"}
          </button>
        </div>
      </ul>
    </div>
  );
}
