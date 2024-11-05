import { useQuery } from "@tanstack/react-query";
import { dummyData } from "../api/dummyApi";
import CardList from "./common/search/loadingComponents/CardList";

import { ListBox } from "./ListBox";
import { getTrendingAnime } from "../services/api";
import { divideArray } from "../utils";

export function ViewBox() {
  const { data, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getTrendingAnime,
  });

  const item = divideArray(data?.results);

  const value = dummyData(3).map((item) => <CardList key={item.id} />);

  return (
    <ul className=" flex items-center overflow-x-scroll no-scrollbar gap-1 md:grid md:grid-cols-3 md:gap-2 ">
      {isLoading ? (
        value
      ) : (
        <>
          {item?.map((anime) => (
            <ListBox
              key={anime.id}
              id={anime.id}
              title={anime.title}
              item={anime.item}
            />
          ))}
        </>
      )}
    </ul>
  );
}
