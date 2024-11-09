import { useFavoritesAnime } from "../../../../server/service";
import { popularAnimeType } from "../../../../types";
import { CardUI } from "../loadingComponents/CardUI";
import Cards from "./Cards";
import { existingItem } from "@/utils";

const Card = ({ listAnime }: { listAnime: popularAnimeType }) => {
  const { data } = useFavoritesAnime();

  return (
    <CardUI>
      {existingItem(listAnime?.results, data!).map((item) => (
        <Cards
          key={item.id}
          image={item.image}
          title={item.title.english ?? item.title.userPreferred}
          genres={item.genres}
          type={item.type}
          id={item.id}
          description={item?.description}
          duration={item.duration}
          rating={item.rating}
          total_episode={item.totalEpisodes}
          favorites={item.favorite}
        />
      ))}
    </CardUI>
  );
};

export default Card;
