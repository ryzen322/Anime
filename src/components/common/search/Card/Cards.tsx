import { useNavigate } from "react-router-dom";
import Image from "../Image";
import { CardsUI } from "../loadingComponents/CardsUI";
import { FaPlay } from "react-icons/fa6";
import { MdOutlineFavorite } from "react-icons/md";
import { useAddFavorites } from "../../../../server/action";

const Cards = ({
  image,
  title,
  genres,
  type,
  id,
  description,
  duration,
  rating,
  total_episode,
  favorites,
}: {
  id: string;
  image: string | null;
  title: string;
  genres: string[] | null;
  type: string | null;
  duration: number | null;
  description: string | null;
  total_episode: number | null;
  rating: number | null;
  favorites: boolean;
}) => {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useAddFavorites();

  return (
    <CardsUI className=" ">
      <div className=" h-[310px] w-full  relative ">
        <button
          className={`absolute top-3 right-3 w-8 h-8 rounded-full z-30 ${
            favorites ? "bg-green-500" : "bg-stone-500"
          } flex items-center justify-center transition-all duration-200 ease-in cursor-pointer`}
          onClick={async () => {
            mutateAsync({
              anime_id: id,
              description: description,
              duration: duration,
              genres: genres,
              image: image,
              rating: rating,
              title: title,
              total_Episodes: total_episode,
              type: type,
              created_at: "",
              email: "",
              id: "",
            });
          }}
          disabled={(favorites && !isPending) || isPending ? true : false}
        >
          <MdOutlineFavorite className=" text-lg" />
        </button>
        <Image
          src={image ? image : ""}
          className=" w-full h-full object-cover rounded-md absolute  top-0 left-0 "
        />
        <div className=" h-full w-full absolute bg-gradient-to-b from-black/10 to-black/65 z-20 rounded-md" />
        <div
          className=" absolute bottom-0 left-3 bg-green-500 h-12 w-12 rounded-full z-30 opacity-0 group-hover:bottom-3 group-hover:opacity-100 transition-all duration-200 ease-in-out flex items-center justify-center pl-1 hover:bg-green-400 cursor-pointer"
          onClick={() => {
            navigate(`detail/${id}`);
          }}
        >
          <FaPlay className=" text-3xl" />
        </div>
      </div>
      <div className=" flex-1 w-full flex flex-col justify-between">
        <p className=" text-[#828284] text-sm font-bold">Type: {type} </p>
        <h1 className=" text-white font-bold leading-5">{title}</h1>
        <div className=" flex items-start flex-wrap gap-1">
          {genres?.map((genre) => (
            <p
              key={genre}
              className=" text-[#E1E1E1] text-xs font-semibold hover:underline cursor-pointer"
            >
              {genre}
            </p>
          ))}
        </div>
      </div>
    </CardsUI>
  );
};

export default Cards;
