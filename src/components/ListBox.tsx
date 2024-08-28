import { Link } from "react-router-dom";
import { ViewCard } from "./ViewCard";
import CardListBoxLoading from "./common/search/loadingComponents/CardListBoxLoading";

export function ListBox() {
  return (
    <CardListBoxLoading className="">
      <div className="  h-[30px]">
        <Link to={""} className=" text-white font-semibold text-xl">
          Top Sellers
        </Link>
      </div>
      <ViewCard />
    </CardListBoxLoading>
  );
}
