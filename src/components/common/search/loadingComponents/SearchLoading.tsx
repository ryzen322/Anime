const SearchLoading = ({ isLoading }: { isLoading: boolean | undefined }) => {
  return (
    <div
      className={` min-h-[4rem] w-full ${
        isLoading ? "hidden" : "flex"
      } flex gap-2 p-1 animate-pulse`}
    >
      <div className=" h-full w-[4rem] bg-stone-500 rounded-md"></div>
      <div className=" h-full grid grid-rows-3 gap-1 w-full">
        <div className=" bg-stone-500 rounded-sm  w-[60%]"></div>
        <div className=" bg-stone-500 rounded-sm  w-[80%]"></div>
        <div className=" bg-stone-500 rounded-sm  w-full"></div>
      </div>
    </div>
  );
};

export default SearchLoading;
