import { useState } from "react";
import Image from "../Image";
import { FaPlus, FaPlay } from "react-icons/fa6";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IoAlertCircle } from "react-icons/io5";
const SlideCard = ({
  src,
  description,
}: {
  src: string;
  description: string;
}) => {
  const [toggleText, setToggleText] = useState(true);

  const text = description.split(" ").slice(0, 6);
  const textSTring = [...text].toString().replaceAll(",", " ");
  return (
    <li
      className="  min-w-full p-4 relative transition-all duration-300 flex items-center justify-center "
      id={"child"}
    >
      <div className=" h-[30rem] w-full rounded-md relative phoneX:h-[35rem] sm:h-[45rem]">
        <div className=" absolute w-full h-full right-0 left-0 bg-gradient-to-b from-black/10 to-black/65 z-20 p-4 rounded-md flex flex-col phoneX:p-2">
          <div className=" w-[2rem] h-[2rem] bg-black/85 ml-auto rounded-full border-[2px] flex items-center justify-center hover:bg-black cursor-pointer">
            <FaPlus className=" text-white text-lg" />
          </div>
          <div className=" mt-auto text-white flex flex-col p-1">
            <h1 className=" text-2xl font-bold phoneX:text-3xl sm:text-4xl">
              Attack on Titan
            </h1>
            <p className=" text-sm font-semibold text-stone-300 phoneX:text-lg sm:text-lg">
              Rating: 84
            </p>
            <span className=" text-xs font-semibold text-stone-300 phoneX:text-sm sm:text-base">
              Adventure, Action, Drama
            </span>
            <div
              className={` relative transition-all duration-200 ease-linear ${
                toggleText
                  ? "h-[1rem] overflow-y-scroll no-scrollbar flex gap-1 sm:h-[1.75rem]"
                  : " min-h-[5rem] max-h-[5rem] flex flex-col overflow-y-scroll no-scrollbar sm:min-h-[15rem]"
              } `}
            >
              <p
                className=" text-xs relative top-0 bottom-0 cursor-pointer phoneX:text-sm sm:text-lg"
                dangerouslySetInnerHTML={{
                  __html: toggleText ? `${textSTring} ...` : `${description} `,
                }}
                onClick={() => setToggleText(!toggleText)}
              />
              <p
                className=" text-stone-400 text-xs text-right cursor-pointer phoneX:text-sm sm:text-lg"
                onClick={() => setToggleText(!toggleText)}
              >
                {toggleText ? "more" : ""}
              </p>
            </div>
            <div className=" flex items-center gap-2 mt-1 phoneX:mt-2">
              <button className=" text-black bg-white/70  text-xs font-bold flex items-center justify-center px-6 py-1 gap-1  rounded-sm ">
                <FaPlay className=" text-lg phoneX:text-2xl" />
              </button>
              <button className=" text-black bg-white/70  text-xs font-bold flex items-center justify-center px-6 py-1  rounded-sm ">
                <MdOutlinePlaylistAdd className=" text-lg phoneX:text-2xl" />
              </button>
              <button className=" text-black bg-white/70  text-xs font-bold flex items-center justify-center p-1 rounded-md ">
                <IoAlertCircle className=" text-lg phoneX:text-2xl" />
              </button>
            </div>
          </div>
        </div>

        <Image
          className=" w-full h-full object-cover rounded-md scale-95 phoneX:scale-100"
          src={src}
        />
      </div>
    </li>
  );
};

export default SlideCard;
