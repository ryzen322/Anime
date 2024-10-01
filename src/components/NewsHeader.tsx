const NewsHeader = () => {
  return (
    <div className=" bg-stone-400 overflow-hidden w-full h-[60dvh] relative phoneX:h-[65dvh] sm:rounded-t-md sm:h-[20rem] md:h-[23rem] md:rounded-none lg:rounded-t-md lg:h-[20rem]">
      <picture>
        <source
          media="(max-width: 640px)"
          className=" rounded-sm"
          srcSet="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-73IhOXpJZiMF.jpg"
        />
        <img
          loading="lazy"
          decoding="async"
          className=" w-full h-full object-cover relative rounded-sm"
          src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg"
          alt=""
        />
      </picture>
      <div className=" absolute top-0 left-0 bg-gradient-to-b from-[#101014]/10 to-[#101014] z-20 h-full w-full flex flex-col items-center gap-2 text-center justify-end pb-[5rem] md:items-start md:pl-6 lg:pb-[4.5rem]">
        <h1 className=" text-stone-300 text-2xl font-bold phoneX:text-4xl">
          Chainsaw Man
        </h1>
        <p className=" text-stone-300 font-medium text-sm max-w-[17rem] leading-4 phoneX:text-base phoneX:leading-[18px] phoneX:max-w-[19rem]">
          Denji has simple dream - to live a happy and paceful life, spending
          time with a girl
        </p>
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
