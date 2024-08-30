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
            className=" h-[50px] w-[88px] min-w-[88px] rounded-md  sm:h-[200px] sm:min-w-[150px] cursor-pointer overflow-hidden"
          >
            <Image
              src={item.image}
              className=" w-full h-full object-cover rounded-md hover:scale-110 transition-all duration-200 ease-in-out"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
