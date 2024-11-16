import { IoMdMore } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Row } from "../interface/database";
import { FaPlay } from "react-icons/fa6";

const FavoriteList = (props: Row<"favorites">) => {
  const { image, title, type, genres, anime_id } = props;
  const navigate = useNavigate();

  return (
    <article className=" h-[7.5rem] w-full rounded-sm cursor-pointer flex items-center px-2 border-stone-700 gap-3 md:w-1/2 lg:w-1/3 xl:w-1/4 group">
      <div className=" h-full w-[5.5rem] overflow-hidden py-2 flex-shrink-0 ">
        <div className=" w-full h-full bg-stone-700  rounded-sm overflow-hidden relative">
          <img
            src={image ? image : ""}
            alt=""
            className=" w-full h-full object-cover relative"
          />
          <div
            className=" absolute h-full w-full  z-20 top-0 left-0 bg-black/20 flex items-center justify-center text-green-400 opacity-0 group-hover:opacity-100"
            onClick={() => {
              navigate(`/detail/${anime_id}`);
            }}
          >
            <FaPlay size={40} />
          </div>
        </div>
      </div>
      <div className=" flex items-center w-full h-full border-b border-stone-600">
        <div className=" h-full py-2 w-full flex flex-col ">
          <h1 className=" text-base font-semibold text-stone-300">{title}</h1>
          <div className=" flex items-center gap-1">
            {genres?.map((item) => (
              <p key={item} className=" text-stone-400 text-xs">
                {item}
              </p>
            ))}
          </div>
          <div className=" mt-auto bg-stone-900 h-6 w-10 rounded-sm flex items-center justify-center">
            <h1 className=" text-sm text-white font-semibold cursor-pointer">
              {type}
            </h1>
          </div>
        </div>
        <div className=" mr-auto text-white h-full flex flex-col justify-between py-2">
          <div className=" h-5 w-5 bg-stone-600 rounded-sm flex items-center justify-center">
            <p className=" text-stone-300 font-semibold text-xs">E</p>
          </div>
          <IoMdMore className=" text-xl text-stone-400" />
        </div>
      </div>
    </article>
  );
};

export default FavoriteList;
