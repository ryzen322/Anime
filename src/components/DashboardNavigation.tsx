import { Link } from "react-router-dom";
export function DashboardNavigation() {
  return (
    <nav className=" w-full grid grid-cols-4 gap-1">
      <div className=" h-[2rem] border-b border-stone-600 flex items-center justify-center cursor-pointer hover:border-stone-100 group transition-all duration-200">
        <Link
          to={""}
          className=" text-stone-400 text-xs font-medium group-hover:text-stone-100  transition-all duration-200"
        >
          Watching 12
        </Link>
      </div>
      <div className=" h-[2rem] border-b border-stone-600 flex items-center justify-center cursor-pointer hover:border-stone-100 group transition-all duration-200">
        <Link
          to={""}
          className=" text-stone-400 text-xs font-medium group-hover:text-stone-100  transition-all duration-200"
        >
          To Watch 24
        </Link>
      </div>
      <div className=" h-[2rem] border-b border-stone-600 flex items-center justify-center cursor-pointer hover:border-stone-100 group transition-all duration-200">
        <Link
          to={""}
          className=" text-stone-400 text-xs font-medium group-hover:text-stone-100  transition-all duration-200"
        >
          Watched 86
        </Link>
      </div>
      <div className=" h-[2rem] border-b border-stone-600 flex items-center justify-center cursor-pointer hover:border-stone-100 group transition-all duration-200">
        <Link
          to={""}
          className=" text-stone-400 text-xs font-medium group-hover:text-stone-100  transition-all duration-200"
        >
          Collection 9
        </Link>
      </div>
    </nav>
  );
}
