import { popularAnimeType } from "../../../../types";
import { CardUI } from "../loadingComponents/CardUI";
import Cards from "./Cards";

const Card = ({ listAnime }: { listAnime: popularAnimeType }) => {
  return (
    <CardUI>
      {listAnime.results.map((item) => (
        <Cards
          key={item.id}
          image={item.image}
          title={item.title.english ?? item.title.userPreferred}
          genres={item.genres}
          type={item.type}
        />
      ))}
    </CardUI>
  );
};

export default Card;
