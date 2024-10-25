import { useQuery } from "@tanstack/react-query";
import FavoriteList from "./FavoriteList";
import { listAnime, queryAnimeType } from "../services/api";

const Favorites = () => {
  const route: listAnime = { page: 1, perPage: 6, routes: "Popular" };
  const { data, isLoading } = useQuery({
    queryKey: ["animelist", route],
    queryFn: async () => queryAnimeType(route),
  });

  if (isLoading) {
    return <div className=" ">loading....</div>;
  }

  return (
    <main className=" flex flex-col gap-2 w-full">
      <h1 className=" text-base font-semibold text-stone-200 phoneX:text-lg">
        Favorites
      </h1>
      <ul className=" flex flex-wrap justify-center border-l border border-stone-600 rounded-md py-2 ">
        {data?.results.map((item) => (
          <FavoriteList key={item.id} {...item} />
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
