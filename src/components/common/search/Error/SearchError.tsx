const SearchError = ({ error }: { error: string | undefined }) => {
  return (
    <div className=" w-full h-[25rem] flex items-center justify-center text-white rounded-b-md bg-[#181818]">
      <p className=" text-sm font-semibold cursor-not-allowed">{error}</p>
    </div>
  );
};

export default SearchError;
