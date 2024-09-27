import { forwardRef, useState } from "react";
import Image from "../Image";
import { FaPlay, FaPlus } from "react-icons/fa";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IoAlertCircle } from "react-icons/io5";
import { Button } from "../../../Button";

interface ListItemProps {
  src?: string;
  description?: string;
  coverImage: string | null;
  active: boolean;
  title: string;
  rating?: number;
  genre: string[];
  stopScrolling: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlideCard = forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      active,
      coverImage,
      description,
      src,
      genre,
      rating,
      title,
      stopScrolling,
    },
    ref
  ) => {
    const [toggleText, setToggleText] = useState(true);

    const text = description?.split(" ").slice(0, 6);
    const textSTring = [...(text as string[])].toString().replaceAll(",", " ");
    return (
      <li
        ref={ref}
        className={`  min-w-full p-4 relative ${
          active ? "opacity-100" : "opacity-0"
        } transition-all duration-700 flex items-center justify-center md:p-0`}
        id={"child"}
        onMouseEnter={() => {
          stopScrolling(false);
        }}
        onMouseLeave={() => {
          stopScrolling(true);
        }}
      >
        <div className=" h-[30rem] w-full rounded-md relative phoneX:h-[35rem] sm:h-[45rem] md:h-[20rem]  lg:h-[25rem] xl:h-[33rem]">
          <div className=" w-full h-full right-0 left-0 bg-gradient-to-b from-black/10 to-black/65 p-4 rounded-md flex flex-col phoneX:p-2">
            <div className=" w-[2rem] h-[2rem] bg-black/85 ml-auto rounded-full border-[2px] flex items-center justify-center hover:bg-black cursor-pointer">
              <FaPlus className=" text-white text-lg" />
            </div>
            <div className=" mt-auto text-white flex flex-col p-1">
              <h1 className=" text-2xl font-bold phoneX:text-3xl sm:text-4xl md:text-2xl xl:text-6xl">
                {title}
              </h1>
              <p className=" text-sm font-semibold text-stone-300 phoneX:text-lg sm:text-lg md:text-sm xl:text-2xl">
                Rating: {rating}
              </p>
              <div className=" flex items-center gap-2">
                <span className=" text-xs font-semibold text-stone-300 phoneX:text-sm sm:text-base md:text-sm xl:text-2xl">
                  Genre:
                </span>
                {genre.map((gen, index) =>
                  index === genre.length - 1 ? (
                    <span
                      key={index}
                      className=" text-xs font-semibold text-stone-300 phoneX:text-sm sm:text-base md:text-sm xl:text-2xl"
                    >
                      {gen}
                    </span>
                  ) : (
                    <span
                      key={index}
                      className=" text-xs font-semibold text-stone-300 phoneX:text-sm sm:text-base md:text-sm xl:text-2xl"
                    >
                      {gen},
                    </span>
                  )
                )}
              </div>
              <div
                className={` relative  ${
                  toggleText
                    ? "h-[1rem] overflow-y-scroll no-scrollbar flex gap-1 sm:h-[1.75rem]"
                    : " min-h-[5rem] max-h-[5rem] flex flex-col overflow-y-scroll no-scrollbar sm:min-h-[5rem] xl:min-h-[7rem]"
                } transition-all duration-200 ease-linear`}
              >
                <p
                  className=" text-xs relative top-0 bottom-0 cursor-pointer phoneX:text-sm sm:text-lg md:text-sm xl:text-base"
                  dangerouslySetInnerHTML={{
                    __html: toggleText
                      ? `${textSTring} ...`
                      : `${description} `,
                  }}
                  onClick={() => setToggleText(!toggleText)}
                />
                <p
                  className=" text-stone-400 text-xs text-right cursor-pointer phoneX:text-sm sm:text-lg md:text-sm xl:text-base"
                  onClick={() => setToggleText(!toggleText)}
                >
                  {toggleText ? "more" : ""}
                </p>
              </div>
              <div className=" flex items-center gap-2 mt-1 phoneX:mt-2 md:mt-1">
                <Button>
                  <FaPlay className="  h-full" />
                  <p className=" text-sm text-center h-full flex items-center justify-center xl:text-lg xl:relative top-[-2px]">
                    Play
                  </p>
                </Button>
                <Button variant={"secondaryColor"}>
                  <MdOutlinePlaylistAdd className="  h-full text-2xl" />
                </Button>
                <Button variant={"thirdColor"}>
                  <IoAlertCircle className=" h-full text-2xl" />
                </Button>
              </div>
            </div>
          </div>

          <Image
            className=" w-full h-full absolute top-0 left-0 -z-20 object-cover rounded-md scale-95 phoneX:scale-100 md:hidden"
            src={src}
          />
          <Image
            className=" hidden md:block w-full absolute top-0 left-0 -z-20 h-full object-cover rounded-md scale-95 phoneX:scale-100"
            src={coverImage ? coverImage : ""}
            alt="Cover Image"
          />
        </div>
      </li>
    );
  }
);

export default SlideCard;
