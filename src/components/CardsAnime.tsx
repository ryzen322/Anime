import Image from "./common/search/Image";

const CardsAnime = () => {
  return (
    <li className=" h-[300.78px] rounded-md  relative cursor-pointer overflow-hidden group  flex flex-col sm:h-[400px] lg:h-[350px] xl:h-[400px]">
      <div className=" w-full h-full bg-stone-800 rounded-sm overflow-hidden relative">
        <Image
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-YCDoj1EkAxFn.jpg"
          className=" relative h-full w-full object-cover group-hover:scale-105 transition-all duration-200 ease-in-out"
        />
        <div className=" h-full w-full absolute bg-gradient-to-b from-black/10 to-black/65 z-20 rounded-md top-0 left-0"></div>
        <div className=" absolute h-full w-full z-30 top-0 left-0 flex flex-col justify-end items-center p-2 text-stone-300 font-semibold">
          <h1 className=" text-lg">One Piece</h1>
          <p className=" text-stone-400 font-normal text-sm">2013 Action</p>
        </div>
      </div>
    </li>
  );
};

export default CardsAnime;
