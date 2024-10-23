import { Link } from "react-router-dom";

import { FaVideo } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";

export function DashboardNavigation() {
  return (
    <nav className=" w-full grid grid-cols-2 gap-2 ">
      <Link
        to={"favorites"}
        className=" h-11 bg-stone-400 rounded-md flex items-center justify-between px-2"
      >
        <div className=" flex items-center gap-2">
          <FaVideo className=" text-lg" />
          <h1 className=" text-sm font-semibold">Favorites</h1>
        </div>
        <div className=" flex items-center gap-2 text-stone-800">
          <h1 className=" text-sm font-semibold">107</h1>
          <MdNavigateNext className=" text-xl font-semibold " />
        </div>
      </Link>
      <Link
        to={"favorites"}
        className=" h-11 bg-stone-400 rounded-md flex items-center justify-between px-2"
      >
        <div className=" flex items-center gap-2">
          <FaVideo className=" text-lg" />
          <h1 className=" text-sm font-semibold">Favorites</h1>
        </div>
        <div className=" flex items-center gap-2 text-stone-800">
          <h1 className=" text-sm font-semibold">107</h1>
          <MdNavigateNext className=" text-xl font-semibold " />
        </div>
      </Link>
      <Link
        to={"favorites"}
        className=" h-11 bg-stone-400 rounded-md flex items-center justify-between px-2"
      >
        <div className=" flex items-center gap-2">
          <FaVideo className=" text-lg" />
          <h1 className=" text-sm font-semibold">Favorites</h1>
        </div>
        <div className=" flex items-center gap-2 text-stone-800">
          <h1 className=" text-sm font-semibold">107</h1>
          <MdNavigateNext className=" text-xl font-semibold " />
        </div>
      </Link>
      <Link
        to={"favorites"}
        className=" h-11 bg-stone-400 rounded-md flex items-center justify-between px-2"
      >
        <div className=" flex items-center gap-2">
          <FaVideo className=" text-lg" />
          <h1 className=" text-sm font-semibold">Favorites</h1>
        </div>
        <div className=" flex items-center gap-2 text-stone-800">
          <h1 className=" text-sm font-semibold">107</h1>
          <MdNavigateNext className=" text-xl font-semibold " />
        </div>
      </Link>
    </nav>
  );
}
