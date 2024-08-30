import { Recommendations } from "../types";

const Recommendation = (props: {
  recommend: Recommendations[] | undefined;
}) => {
  const { recommend } = props;
  return (
    <div className=" flex flex-col gap-3">
      <h1 className=" text-white font-bold">Recommendation</h1>
      <ul className=" flex items-center gap-1 overflow-x-scroll no-scrollbar">
        {recommend?.map((item) => (
          <li
            key={item.id}
            className=" h-[50px] w-[88px] min-w-[88px] rounded-md bg-stone-600"
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
