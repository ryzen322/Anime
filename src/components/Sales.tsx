import Image from "./common/search/Image";

const Sales = () => {
  return (
    <li className=" min-w-[305px] max-w-[305px] w-[305px] pr-2 flex flex-col gap-4 cursor-pointer">
      <div className=" w-full h-1/2 flex-shrink-0 bg-stone-400 rounded-md overflow-hidden">
        <Image
          src="https://cdn2.unrealengine.com/egs-sales-specials-breaker-1280x721-8d81919a48e5.jpg?h=480&quality=medium&resize=1&w=854"
          className=" w-full h-full object-fill"
        />
      </div>
      <div className=" flex-1 flex flex-col justify-between gap-2">
        <h1 className=" text-stone-300 text-xl font-bold">Sales & Special</h1>
        <p className=" text-stone-400 leading-5 text-sm font-semibold">
          Save big on hit titles and hidden gems. There's always something on
          sale at the Epic Games Store!
        </p>

        <button className=" text-stone-300 bg-[#333337] mr-auto p-3 rounded-md text-sm font-bold">
          Browse
        </button>
      </div>
    </li>
  );
};

export default Sales;
