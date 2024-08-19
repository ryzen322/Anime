import Image from "../Image";

const Cards = ({
  image,
  title,
  genres,
}: {
  image: string;
  title: string;
  genres: string[];
}) => {
  return (
    <li className="  ease-in-out delay-300 h-[423px] min-w-[223px] rounded-md cursor-pointer relative group overflow-hidden  duration-300  flex flex-col gap-2">
      <div className=" h-[310px] w-full  relative">
        <Image
          src={image}
          className=" w-full h-full object-cover rounded-md absolute  top-0 left-0 "
        />
      </div>
      <div className=" flex-1 w-full flex flex-col justify-between">
        <p className=" text-[#828284] text-sm font-bold">Base Gaming </p>
        <h1 className=" text-white font-bold leading-5">{title}</h1>
        <div className=" flex items-start flex-wrap gap-1">
          {genres.map((genre) => (
            <p key={genre} className=" text-[#E1E1E1] text-xs font-semibold">
              {genre}
            </p>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Cards;
