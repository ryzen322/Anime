import { useNavigate } from "react-router-dom";
import Image from "../Image";
import { CardsUI } from "../loadingComponents/CardsUI";
import { FaPlay } from "react-icons/fa6";
import { MdOutlineFavorite } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";

import ActionComponent from "@/components/Action-component";
import { useActions } from "@/server/action-functions";
import { useRemoveFavorites } from "@/server/action";
import { CardsTypeExtend } from "@/types";
import { CollectionType } from "@/server/service";

const Cards = (props: CardsTypeExtend) => {
  const { genres, id, image, title, type, description, collection } = props;
  const navigate = useNavigate();

  const { addFavorites } = useActions();

  const { mutateAsync } = useRemoveFavorites();

  function checkAvailability(
    collection: (string | null)[],
    val: CollectionType
  ) {
    return collection.some((arrVal) => val === arrVal);
  }

  return (
    <CardsUI className=" ">
      <div className=" h-[310px] w-full  relative ">
        <div className=" relative flex flex-col gap-2 p-1">
          <ActionComponent
            icon={MdOutlineFavorite}
            itemExist={checkAvailability(collection!, "favorite")}
            text="Favorite"
            actionFunction={() =>
              addFavorites({ ...props, collectionType: "favorite" })
            }
            anime={title}
            actionRemove={() =>
              mutateAsync({ id, title, collectionType: "favorite" })
            }
            description={description!}
            about={description!}
          />
          <ActionComponent
            icon={FaBookmark}
            itemExist={checkAvailability(collection!, "bookmarks")}
            text="Bookmarks"
            actionFunction={() =>
              addFavorites({ ...props, collectionType: "bookmarks" })
            }
            anime={title}
            actionRemove={() =>
              mutateAsync({ id, title, collectionType: "bookmarks" })
            }
            description={description!}
            about={description!}
          />
        </div>

        <Image
          src={image ? image : ""}
          className=" w-full h-full object-cover rounded-md absolute  top-0 left-0 "
        />
        <div className=" h-full w-full top-0 absolute bg-gradient-to-b from-black/10 to-black/65 z-20 rounded-md" />
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
