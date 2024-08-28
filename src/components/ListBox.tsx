import { Link } from "react-router-dom";
import { ViewCard } from "./ViewCard";
import CardListBoxLoading from "./common/search/loadingComponents/CardListBoxLoading";
import { AnimeObj } from "../types";

interface AnimeObject {
  title: string;
  id: string;
  item: AnimeObj[];
}

export function ListBox(props: AnimeObject) {
  const { title, item } = props;

  return (
    <CardListBoxLoading className="">
      <div className="  h-[30px]">
        <Link to={""} className=" text-white font-semibold text-xl">
          {title}
        </Link>
      </div>
      <ViewCard item={item} />
    </CardListBoxLoading>
  );
}
