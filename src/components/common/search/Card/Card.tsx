import { popularAnimeType } from "../../../../types";
import Cards from "./Cards";

const Card = ({ listAnime }: { listAnime: popularAnimeType }) => {
  return (
    <ul className=" w-full flex items-center overflow-x-scroll gap-4 no-scrollbar relative">
      {listAnime.results.map((item) => (
        <Cards
          key={item.id}
          image={item.image}
          title={item.title.english ?? item.title.userPreferred}
          genres={item.genres}
        />
      ))}
    </ul>
  );
};

export default Card;
