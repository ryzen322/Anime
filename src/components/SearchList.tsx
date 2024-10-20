import { Link } from "react-router-dom";
import Image from "./common/search/Image";

interface ListSearch {
  src?: string | null;
  type: string | null;
  title: string;
  genre: string[] | null;
  detailId: string;
  modal: () => void;
}

const SearchList = ({
  src,
  type,
  title,
  genre,
  detailId,
  modal,
}: ListSearch) => {
  return (
    <Link
      to={`detail/${detailId}`}
      className=" w-full min-h-[3.75rem]  rounded-md flex items-center px-3 gap-4 hover:bg-[#2F2F2F] py-2 group"
      onClick={modal}
    >
      <div className=" h-[3rem] w-[3rem] shrink-0  rounded-md ">
        <Image
          className=" w-full h-full rounded-md object-cover"
          src={`${src}`}
        />
      </div>
      <div className=" flex flex-col  h-full justify-evenly w-[60%] gap-1">
        <h1 className=" text-white text-sm font-semibold truncate ">{title}</h1>
        <div className=" flex items-center gap-1 truncate">
          {genre?.map((item, index) => (
            <p
              key={index}
              className=" text-[#7c7c7c] font-semibold text-xs hover:underline"
            >
              {index === genre.length - 1 ? `${item}` : `${item},`}
            </p>
          ))}
        </div>
      </div>

      {type && (
        <div className=" ml-auto bg-[#2F2F2F] rounded-sm flex items-center justify-center px-2 py-1 text-[#7c7c7c] group-hover:bg-[#444444]">
          <p className=" text-xs font-semibold text-[#afaaaa]">{type}</p>
        </div>
      )}
    </Link>
  );
};

export default SearchList;
