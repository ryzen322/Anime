import Image from "../Image";
import { CardsUI } from "../loadingComponents/CardsUI";

const Cards = ({
  image,
  title,
  genres,
  type,
  id,
}: {
  image: string | null;
  title: string;
  genres: string[] | null;
  type: string | null;
  id: string;
}) => {
  return (
    <CardsUI className=" " detailId={id}>
      <div className=" h-[310px] w-full  relative ">
        <Image
          src={image ? image : ""}
          className=" w-full h-full object-cover rounded-md absolute  top-0 left-0 "
        />
        <div className=" h-full w-full absolute bg-gradient-to-b from-black/10 to-black/65 z-20 rounded-md"></div>
      </div>
      <div className=" flex-1 w-full flex flex-col justify-between">
        <p className=" text-[#828284] text-sm font-bold">Type: {type} </p>
        <h1 className=" text-white font-bold leading-5">{title}</h1>
        <div className=" flex items-start flex-wrap gap-1">
          {genres?.map((genre) => (
            <p key={genre} className=" text-[#E1E1E1] text-xs font-semibold">
              {genre}
            </p>
          ))}
        </div>
      </div>
    </CardsUI>
  );
};

export default Cards;
