import Cards from "./Cards";

const Card = () => {
  return (
    <ul className=" w-full flex items-center overflow-x-scroll gap-2 no-scrollbar relative">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </ul>
  );
};

export default Card;
