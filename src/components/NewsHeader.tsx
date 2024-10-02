import { AnimeObj } from "../types";

const NewsHeader = ({ anime }: { anime: AnimeObj | undefined }) => {
  return (
    <div className="  overflow-hidden w-full px-4 relative phoneX:px-0 sm:rounded-t-md sm:h-[30rem] md:h-[25rem] md:rounded-none lg:rounded-t-md xl:h-[26rem]">
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
        <h1 className=" text-stone-300 text-2xl font-bold leading-6 max-w-[20rem] phoneX:text-4xl phoneX:leading-7 phoneX:max-w-[30rem] md:max-w-[31rem] lg:max-w-[40rem]">
          {anime?.title.english}
        </h1>

        <div
          className={`h-[5rem] w-full relative flex overflow-y-scroll no-scrollbar  justify-center px-[2rem] sm:px-[1rem] phoneX:h-auto sm:h-[9rem] md:px-0 md:max-w-[30rem] lg:max-w-[40rem]`}
        >
          <p
            className={`text-stone-300 font-medium text-sm leading-4 relative phoneX:text-base phoneX:leading-[18px] md:text-xs lg:text-sm`}
            dangerouslySetInnerHTML={{
              __html: `${anime?.description} `,
            }}
          />
        </div>
        <div className=" flex items-center justify-center gap-2 h-[2.5rem] min-h-[2.5rem] md:w-[30rem] lg:w-[40rem]">
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
