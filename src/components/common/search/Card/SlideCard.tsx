import { forwardRef, useState } from "react";
import Image from "../Image";
import { FaPlay, FaPlus } from "react-icons/fa";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IoAlertCircle } from "react-icons/io5";

interface ListItemProps {
  src: string;
  description: string;
  coverImage: string | null;
  active: boolean;
}

const SlideCard = forwardRef<HTMLLIElement, ListItemProps>(
  ({ active, coverImage, description, src }, ref) => {
    const [toggleText, setToggleText] = useState(true);

    const text = description.split(" ").slice(0, 6);
    const textSTring = [...text].toString().replaceAll(",", " ");
    return (
      <li
        ref={ref}
        className={`  min-w-full p-4 relative ${
          active ? "opacity-100" : "opacity-0"
        } transition-all duration-300 flex items-center justify-center md:p-0`}
        id={"child"}
      >
        <div className=" h-[30rem] w-full rounded-md relative phoneX:h-[35rem] sm:h-[45rem] md:h-[20rem] bg-stone-600 ">
          <div className=" absolute w-full h-full right-0 left-0 bg-gradient-to-b from-black/10 to-black/65 z-20 p-4 rounded-md flex flex-col phoneX:p-2">
            <div className=" w-[2rem] h-[2rem] bg-black/85 ml-auto rounded-full border-[2px] flex items-center justify-center hover:bg-black cursor-pointer">
              <FaPlus className=" text-white text-lg" />
            </div>
            <div className=" mt-auto text-white flex flex-col p-1">
              <h1 className=" text-2xl font-bold phoneX:text-3xl sm:text-4xl md:text-2xl">
                Attack on Titan
              </h1>
              <p className=" text-sm font-semibold text-stone-300 phoneX:text-lg sm:text-lg md:text-sm">
                Rating: 84
              </p>
              <span className=" text-xs font-semibold text-stone-300 phoneX:text-sm sm:text-base md:text-sm">
                Adventure, Action, Drama
              </span>
              <div
                className={` relative transition-all duration-200 ease-linear ${
                  toggleText
                    ? "h-[1rem] overflow-y-scroll no-scrollbar flex gap-1 sm:h-[1.75rem]"
                    : " min-h-[5rem] max-h-[5rem] flex flex-col overflow-y-scroll no-scrollbar sm:min-h-[5rem]"
                } `}
              >
                <p
                  className=" text-xs relative top-0 bottom-0 cursor-pointer phoneX:text-sm sm:text-lg md:text-sm"
                  dangerouslySetInnerHTML={{
                    __html: toggleText
                      ? `${textSTring} ...`
                      : `${description} `,
                  }}
                  onClick={() => setToggleText(!toggleText)}
                />
                <p
                  className=" text-stone-400 text-xs text-right cursor-pointer phoneX:text-sm sm:text-lg md:text-sm"
                  onClick={() => setToggleText(!toggleText)}
                >
                  {toggleText ? "more" : ""}
                </p>
              </div>
              <div className=" flex items-center gap-2 mt-1 phoneX:mt-2 md:mt-1">
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
            className=" w-full h-full object-cover rounded-md scale-95 phoneX:scale-100 md:hidden"
            src={src}
          />
          <Image
            className=" hidden md:block w-full h-full object-cover rounded-md scale-95 phoneX:scale-100"
            src={coverImage ? coverImage : ""}
            alt="Cover Image"
          />
        </div>
      </li>
    );
  }
);

export default SlideCard;
