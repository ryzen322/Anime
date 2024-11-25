import { forwardRef } from "react";
import Image from "../Image";
import { FaBookmark, FaPlay } from "react-icons/fa";
import { MdOutlineFavorite, MdOutlinePlaylistAdd } from "react-icons/md";
import { IoAlertCircle } from "react-icons/io5";
import { Button } from "../../../Button";
import { Link } from "react-router-dom";
import DialogDetail from "@/components/DialogDetail";
import DialogCollection from "@/components/DialogCollection";
import { useActions } from "@/server/action-functions";
import { useRemoveFavorites } from "@/server/action";
import ActionComponent from "@/components/Action-component";
import { CollectionType } from "@/server/service";
import { IoIosTimer } from "react-icons/io";

interface ListItemProps {
  id: string;
  image: string | null;
  description: string | null;
  collection: (string | null)[];
  total_episode: number | null;
  coverImage: string | null;
  genres: string[] | null;
  rating: number | null;
  duration: number | null;
  title: string;
  active: boolean;
  type: string | null;
  stopScrolling: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlideCard = forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      active,
      coverImage,
      description,
      genres,
      rating,
      title,
      id,
      image,
      stopScrolling,
      collection,
      duration,
      total_episode,
      type,
    },
    ref
  ) => {
    const props = {
      id,
      image,
      title,
      genres,
      type,
      duration,
      description,
      total_episode,
      rating,
    };
    const { addFavorites } = useActions();

    const { mutateAsync } = useRemoveFavorites();

    function checkAvailability(
      collection: (string | null)[],
      val: CollectionType
    ) {
      return collection.some((arrVal) => val === arrVal);
    }

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
            <div className=" flex flex-col ml-auto gap-1">
              <ActionComponent
                icon={MdOutlineFavorite}
                itemExist={checkAvailability(collection, "favorite")}
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
                type="slide"
              />
              <ActionComponent
                icon={FaBookmark}
                itemExist={checkAvailability(collection, "bookmarks")}
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
                type="slide"
              />
              <ActionComponent
                icon={IoIosTimer}
                itemExist={checkAvailability(collection, "watch later")}
                text="Watch Later"
                actionFunction={() =>
                  addFavorites({ ...props, collectionType: "watch later" })
                }
                anime={title}
                actionRemove={() =>
                  mutateAsync({ id, title, collectionType: "watch later" })
                }
                description={description!}
                about={description!}
                type="slide"
              />
            </div>
            <div className=" mt-auto text-white flex flex-col p-1">
              <h1 className=" text-2xl font-bold phoneX:text-3xl sm:text-4xl md:text-2xl xl:text-6xl">
                {title}
              </h1>
              <p className=" text-sm font-semibold text-stone-300 phoneX:text-lg sm:text-lg md:text-sm xl:text-2xl">
                Rating: {rating}
              </p>
              <div className=" flex  gap-2">
                <span className=" text-xs font-semibold text-stone-300 phoneX:text-sm sm:text-base md:text-sm xl:text-2xl">
                  Genre:
                </span>
                <div className=" flex gap-1 flex-wrap">
                  {genres?.map((gen, index) =>
                    index === genres.length - 1 ? (
                      <span
                        key={index}
                        className=" text-xs font-semibold text-stone-300 hover:underline phoneX:text-sm sm:text-base md:text-sm xl:text-2xl"
                      >
                        {gen}
                      </span>
                    ) : (
                      <span
                        key={index}
                        className=" text-xs font-semibold text-stone-300 hover:underline phoneX:text-sm sm:text-base md:text-sm xl:text-2xl"
                      >
                        {gen},
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className=" flex items-center gap-2 mt-1 phoneX:mt-2 md:mt-1">
                <Link to={`detail/${id}`}>
                  <Button>
                    <FaPlay className="  h-full" />
                  </Button>
                </Link>
                <DialogCollection icon={MdOutlinePlaylistAdd} />
                <DialogDetail
                  icon={IoAlertCircle}
                  description={description!}
                  title={title}
                />
              </div>
            </div>
          </div>

          <Image
            className=" w-full h-full absolute top-0 left-0 -z-20 object-cover rounded-md scale-95 phoneX:scale-100 md:hidden"
            src={image ? image : ""}
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
