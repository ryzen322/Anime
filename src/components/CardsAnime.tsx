import { PremiumAccObject } from "../types";
import Image from "./common/search/Image";

const CardsAnime = (props: PremiumAccObject) => {
  const { title, image, episodeTitle } = props;

  return (
    <li className=" h-[300.78px] rounded-md  relative cursor-pointer overflow-hidden group  flex flex-col sm:h-[400px] lg:h-[350px] xl:h-[400px]">
      <div className=" w-full h-full bg-stone-800 rounded-sm overflow-hidden relative">
        <Image
          src={image}
          className=" relative h-full w-full object-cover group-hover:scale-105 transition-all duration-200 ease-in-out"
        />
        <div className=" h-full w-full absolute bg-gradient-to-b from-black/10 to-black/65 z-20 rounded-md top-0 left-0"></div>
        <div className=" absolute h-full w-full z-30 top-0 left-0 flex flex-col justify-end items-center p-2 text-stone-300 font-semibold">
          <h1 className=" text-lg text-center leading-5">{title.english}</h1>
          <p className=" text-stone-300 text-sm font-semibold">
            {episodeTitle}
          </p>
        </div>
      </div>
    </li>
  );
};

export default CardsAnime;
