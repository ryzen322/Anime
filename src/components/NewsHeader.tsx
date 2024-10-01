import { AnimeObj } from "../types";

const NewsHeader = ({ anime }: { anime: AnimeObj | undefined }) => {
  return (
    <div className="  overflow-hidden w-full px-6 relative phoneX:px-0 sm:rounded-t-md sm:h-[20rem] md:h-[23rem] md:rounded-none lg:rounded-t-md lg:h-[20rem]">
      <picture>
        <source
          media="(max-width: 640px)"
          className=" rounded-sm"
          srcSet={anime?.image ? anime.image : ""}
        />
        <img
          loading="lazy"
          decoding="async"
          className=" w-full h-full object-cover relative rounded-sm"
          src={anime?.cover ? anime.cover : ""}
          alt=""
        />
      </picture>
      <div className=" absolute top-0 left-0 bg-gradient-to-b from-[#101014]/10 to-[#101014] z-20 h-full w-full flex flex-col items-center gap-2 text-center justify-end pb-[5rem] md:items-start md:pl-6 lg:pb-[4.5rem]">
        <h1 className=" text-stone-300 text-2xl font-bold leading-6 max-w-[20rem] phoneX:text-4xl">
          {anime?.title.english}
        </h1>
        <p
          className={`text-stone-300 font-medium text-sm max-w-[17rem] max-h-[4rem] overflow-hidden leading-4 phoneX:text-base phoneX:leading-[18px] phoneX:max-w-[19rem]`}
          dangerouslySetInnerHTML={{
            __html: `${anime?.description} `,
          }}
        />
        <div className=" flex items-center justify-center gap-2 h-[2.5rem]">
          <button className=" bg-white h-full text-sm font-bold px-3 rounded-md cursor-pointer">
            Learn More
          </button>
          <button className=" bg-[#292929] h-full text-sm font-bold px-3 rounded-md cursor-pointer text-white">
            To Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsHeader;
