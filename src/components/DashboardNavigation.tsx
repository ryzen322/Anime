import { Link } from "react-router-dom";

import { FaVideo, FaFolder, FaBookmark } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import { useFavoritesAnime } from "../server/service";
import { useCreateUser } from "../server/action";

export function DashboardNavigation() {
  const { data, status, email, refetch } = useFavoritesAnime();

  const create = useCreateUser({ user_email: email!, refetchData: refetch });

  if (status === "error") {
    return (
      <div className=" w-full  bg-stone-200  font-medium rounded-md flex items-center ">
        <div className=" h-full flex flex-col p-3 gap-2">
          <h1 className=" text-sm font-semibold">
            Your Account isnt connected to our database
          </h1>
          <p className=" text-stone-600 text-xs">
            We can keep your settings safe so you can sync them across devices
            or rertirve them when you get a new device
          </p>

          <button
            className={`text-xs bg-green-800 py-2 text-white rounded-md hover:bg-green-500 ${
              create.isPending
                ? " cursor-not-allowed "
                : create.isSuccess
                ? " cursor-not-allowed"
                : " cursor-pointer "
            }`}
            onClick={async () => create.mutate()}
            disabled={create.isSuccess ? true : false}
          >
            {create.isPending
              ? "Connecting"
              : create.isSuccess
              ? "Connected"
              : "Connect your account"}
          </button>
        </div>
      </div>
    );
  }
  if (status === "pending") {
    return (
      <div className=" w-full grid grid-cols-2 gap-2 md:grid-cols-4">
        <div className=" h-11 bg-stone-400 rounded-md flex items-center justify-between px-2 phoneX:h-12 hover:bg-stone-50 animate-pulse" />
        <div className=" h-11 bg-stone-400 rounded-md flex items-center justify-between px-2 phoneX:h-12 hover:bg-stone-50 animate-pulse" />
        <div className=" h-11 bg-stone-400 rounded-md flex items-center justify-between px-2 phoneX:h-12 hover:bg-stone-50 animate-pulse" />
        <div className=" h-11 bg-stone-400 rounded-md flex items-center justify-between px-2 phoneX:h-12 hover:bg-stone-50 animate-pulse" />
      </div>
    );
  }

  return (
    <nav className=" w-full grid grid-cols-2 gap-2 md:grid-cols-4">
      <Link
        to={"favorites"}
        className=" h-11 bg-stone-400 rounded-md flex items-center justify-between px-2 phoneX:h-12 hover:bg-stone-50 "
        // onClick={async () => await addFavorites()}
      >
        <div className=" flex items-center gap-2">
          <AiOutlineLike className=" text-lg text-blue-700" />
          <h1 className=" text-sm font-semibold">Favorites</h1>
        </div>
        <div className=" flex items-center gap-2 text-stone-800">
          <h1 className=" text-sm font-semibold">
            {data ? data[0].favorites.length : ""}
          </h1>
          <MdNavigateNext className=" text-xl font-semibold " />
        </div>
      </Link>
      <Link
        to={"favorites"}
        className=" h-11 bg-stone-400 rounded-md flex items-center justify-between px-2 phoneX:h-12  hover:bg-stone-50"
      >
        <div className=" flex items-center gap-2">
          <FaVideo className=" text-lg " />
          <h1 className=" text-sm font-semibold">Watch Later</h1>
        </div>
        <div className=" flex items-center gap-2 text-stone-800">
          <h1 className=" text-sm font-semibold">89</h1>
          <MdNavigateNext className=" text-xl font-semibold " />
        </div>
      </Link>
      <Link
        to={"favorites"}
        className=" h-11 bg-stone-400 rounded-md flex items-center justify-between px-2 phoneX:h-12 hover:bg-stone-50"
      >
        <div className=" flex items-center gap-2">
          <FaBookmark className=" text-lg" />
          <h1 className=" text-sm font-semibold">Bookmarks</h1>
        </div>
        <div className=" flex items-center gap-2 text-stone-800">
          <h1 className=" text-sm font-semibold">132</h1>
          <MdNavigateNext className=" text-xl font-semibold " />
        </div>
      </Link>
      <Link
        to={"favorites"}
        className=" h-11 bg-stone-400 rounded-md flex items-center justify-between px-2 phoneX:h-12 hover:bg-stone-50"
      >
        <div className=" flex items-center gap-2">
          <FaFolder className=" text-lg" />
          <h1 className=" text-sm font-semibold">Collection</h1>
        </div>
        <div className=" flex items-center gap-2 text-stone-800">
          <h1 className=" text-sm font-semibold">05</h1>
          <MdNavigateNext className=" text-xl font-semibold " />
        </div>
      </Link>
    </nav>
  );
}
