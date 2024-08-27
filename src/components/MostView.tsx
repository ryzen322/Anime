import { Link } from "react-router-dom";
import { ViewBox } from "./ViewBox";

const MostView = () => {
  return (
    <section className=" flex flex-col gap-4">
      <Link to={"/"} className=" text-white font-semibold text-2xl">
        Most View
      </Link>
      <ViewBox />
    </section>
  );
};

export default MostView;
