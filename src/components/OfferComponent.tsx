import { Link } from "react-router-dom";
import Sales from "./Sales";

export const OfferComponent = () => {
  return (
    <section className=" flex flex-col gap-4">
      <Link to={"/"} className=" text-white font-semibold text-2xl">
        Limited Offer Item
      </Link>
      <ul className=" flex h-[356.3px] overflow-x-scroll no-scrollbar lg:grid lg:grid-cols-3">
        <Sales />
        <Sales />
        <Sales />
      </ul>
    </section>
  );
};
