import { BiSolidCommentDetail } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa6";
import { AiringObj } from "../types";
const NewsItems = (props: { airing: AiringObj }) => {
  const { description, image, title, rating, episode, genres, type } =
    props.airing;

  return (
    <li className=" h-[14rem] border-t border-stone-600/55 flex items-center gap-2 py-2 last:border-b md:flex-col-reverse md:h-auto md:gap-3 md:border-t-0 md:border-b">
      <div className=" h-full w-full flex-1 flex flex-col justify-between gap-2">
        <h1 className=" text-stone-200 font-semibold text-sm">
          {title.english || title.native}
        </h1>
        <div className=" h-[7rem] text-xs text-stone-400 overflow-y-scroll no-scrollbar font-medium">
          <p
            dangerouslySetInnerHTML={{
              __html: `${description} `,
            }}
          />
        </div>
        <div className="hidden md:flex flex-col text-stone-400 font-semibold text-xs">
          <p>Rating: {rating}</p>
          <p>Episode: {episode}</p>
          <p>
            Genres:{" "}
            {genres?.map(
              (item, index) =>
                `${genres.length === index + 1 ? `${item}` : `${item},`} `
            )}
          </p>
          <p>Type: {type}</p>
        </div>
        <div className="  w-full flex items-center justify-between px-1  mt-auto mb-1 md:mt-1">
          <div className=" flex items-center gap-1 text-stone-300">
            <BiSolidCommentDetail className=" cursor-pointer text-xl" />
            <p className=" text-xs font-medium">35</p>
          </div>
          <div className=" flex items-center gap-1 text-stone-300">
            <FaRegBookmark className=" cursor-pointer text-xl" />
          </div>
        </div>
      </div>
      <div className=" h-full w-[9.5rem] shrink-0 rounded-sm overflow-hidden md:w-full md:h-[22.5rem]">
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className=" w-full h-full  rounded-md object-cover"
        />
      </div>
    </li>
  );
};

export default NewsItems;
