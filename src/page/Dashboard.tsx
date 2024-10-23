import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardNavigation } from "../components/DashboardNavigation";

const Dashboard = () => {
  return (
    <main className=" container mx-auto mt-[3.90rem] mb-2 h-[81dvh] flex flex-col  px-2">
      <div className=" flex flex-col">
        <h1 className=" text-white text-base font-semibold">
          Playlist For You
        </h1>
        <p className=" text-xs text-stone-400">Based on your videos</p>
      </div>
      <DashboardHeader />
      <div className=" w-full flex flex-col gap-3 py-2">
        <DashboardNavigation />
        <div className=" w-full h-[5rem]  p-1">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
