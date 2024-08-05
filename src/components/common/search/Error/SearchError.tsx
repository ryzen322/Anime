import { FaTools } from "react-icons/fa";

const SearchError = ({ error }: { error: string | undefined }) => {
  return (
    <div className=" w-full h-[25rem] flex flex-col items-center justify-center gap-4 text-white rounded-b-md bg-[#181818] sm:h-[35rem]">
      <FaTools className=" text-8xl" />
      <p className=" text-sm font-semibold cursor-not-allowed">{error}</p>
    </div>
  );
};

export default SearchError;
