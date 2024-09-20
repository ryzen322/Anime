import { Recommendations } from "../types";
import Image from "./common/search/Image";

const Recommendation = (props: {
  recommend: Recommendations[] | undefined;
}) => {
  const { recommend } = props;
  return (
    <div className=" flex flex-col gap-3">
      <h1 className=" text-white font-bold sm:text-2xl">Recommendation</h1>
      <ul className=" flex items-center gap-2 overflow-x-scroll no-scrollbar">
        {recommend?.map((item) => (
          <li
            key={item.id}
            className=" h-[7] w-[8rem] min-w-[8rem] rounded-md  sm:h-[200px] sm:min-w-[150px] cursor-pointer overflow-hidden"
          >
            <Image
              src={item.image}
              className=" w-full h-full object-cover rounded-md hover:scale-110 transition-all duration-200 ease-in-out"
              decoding="async"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
