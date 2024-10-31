import { useFavoritesAnime } from "../../../../server/service";
import { popularAnimeType } from "../../../../types";
import { CardUI } from "../loadingComponents/CardUI";
import Cards from "./Cards";

const Card = ({ listAnime }: { listAnime: popularAnimeType }) => {
  const { data } = useFavoritesAnime();

  const favorites = listAnime?.results?.map((item, key) => {
    if (item.id === data?.[key]?.anime_id) {
      return {
        ...item,
        favorites: true,
      };
    } else {
      return {
        ...item,
        favorites: false,
      };
    }
  });

  return (
    <CardUI>
      {favorites.map((item) => (
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
          favorites={item.favorites}
        />
      ))}
    </CardUI>
  );
};

export default Card;
