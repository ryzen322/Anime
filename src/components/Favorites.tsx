import FavoriteList from "./FavoriteList";

const Favorites = () => {
  return (
    <main className=" flex flex-col gap-2">
      <h1 className=" text-base font-semibold text-stone-200">Favorites</h1>
      <ul className=" grid grid-cols-1">
        <FavoriteList />
      </ul>
    </main>
  );
};

export default Favorites;
