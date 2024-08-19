import Image from "./common/search/Image";

const CardsAnime = () => {
  return (
    <li className=" h-[300px] rounded-md sm:h-[350px] relative overflow-hidden group  flex flex-col">
      <div className=" w-full h-[70%] bg-stone-800 rounded-sm overflow-hidden relative">
        <Image
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-YCDoj1EkAxFn.jpg"
          className=" relative h-full w-full object-cover"
        />
        <div className=" h-full w-full absolute bg-gradient-to-b from-black/10 to-black/65 z-20 rounded-md top-0 left-0"></div>
      </div>
      <div className=" flex-1 flex flex-col mt-2">
        <p className=" text-sm text-stone-400 font-medium">Title: One Piece</p>
        <p className=" text-sm text-stone-400 font-medium">Duration: 20 mins</p>
        <p className=" text-sm text-stone-400 font-medium">
          Genre: Drama, Classic
        </p>
        <p className=" text-sm text-stone-400 font-medium">Type: Tv</p>
      </div>
    </li>
  );
};

export default CardsAnime;
