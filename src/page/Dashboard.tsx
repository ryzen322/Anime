import Layout from "../components/Layout";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Layout>
      <div className=" h-[25rem] w-full flex items-center gap-2">
        <div className=" h-full w-[25%] bg-stone-300 rounded-sm">
          <Link to={"/dashboard/favorites"} className=" text-black">
            favorites
          </Link>
        </div>
        <div className=" flex-1 bg-stone-800 h-full rounded-sm">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
