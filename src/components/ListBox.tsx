import { Link } from "react-router-dom";
import { ViewCard } from "./ViewCard";

export function ListBox() {
  return (
    <li className="  min-w-[300px] max-w-[300px] px-3 flex flex-col gap-3 [&:not(:last-child)]:border-r border-stone-500 md:min-w-full ">
      <div className="  h-[30px]">
        <Link to={""} className=" text-white font-semibold text-xl">
          Top Sellers
        </Link>
      </div>
      <ViewCard />
    </li>
  );
}
