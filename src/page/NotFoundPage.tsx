import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { MdOutlineErrorOutline } from "react-icons/md";

const NotFoundPage = () => {
  console.log("hello");
  return (
    <Layout>
      <div className=" h-[73dvh] w-full flex items-center justify-center">
        <div className=" flex flex-col items-center text-white font-semibold">
          <MdOutlineErrorOutline
            className=" text-white text-7xl
          "
          />
          <h1 className=" text-4xl font-bold">We're apologize</h1>
          <h1 className=" text-4xl font-bold">Page Not Found</h1>
          <p className=" mt-3 text-sm">
            To continue, pelase explore other page
          </p>
          <p className=" text-sm font-semibold flex gap-1 mt-1">
            <span className=" text-stone-400">View Our</span>
            <span className=" underline text-blue-400">privacy policy</span>
          </p>
          <div className=" flex flex-col gap-2 w-full mt-3 ">
            <button
              disabled
              className=" bg-[#212125] py-2  rounded-md text-stone-400 cursor-not-allowed"
            >
              Continue
            </button>
            <Link
              to={"/"}
              className=" border py-2  rounded-md text-stone-400 cursor-pointer flex items-center justify-center hover:bg-stone-500 transition-all duration-200"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
