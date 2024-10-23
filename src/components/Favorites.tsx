import { fakeArray } from "../utils";
import FavoriteList from "./FavoriteList";

const Favorites = () => {
  return (
    <main className=" flex flex-col gap-2 w-full">
      <h1 className=" text-base font-semibold text-stone-200 phoneX:text-lg">
        Favorites
      </h1>
      <ul className=" flex flex-wrap justify-center border-l border border-stone-600 rounded-md py-2 ">
        {fakeArray.map((_, index) => (
          <FavoriteList key={index + 1} />
        ))}
      </ul>
      <div className=" w-full h-[3.5rem]  flex justify-center items-center py-2">
        <button className=" bg-blue-800 text-sm h-full rounded-md w-[65%] text-stone-200 font-semibold hover:bg-blue-600">
          See All Playlists
        </button>
      </div>
    </main>
  );
};

export default Favorites;
