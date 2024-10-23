import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardNavigation } from "../components/DashboardNavigation";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();

  if (!user) {
    return <div className=" w-full h-dvh bg-stone-400"></div>;
  } else {
    return (
      <main className=" container mx-auto mt-[3.90rem] mb-2  flex flex-col  px-2 phoneX:mt-[5rem] ">
        <div className=" flex flex-col">
          <h1 className=" text-white text-base font-semibold phoneX:text-lg">
            Playlist For You
          </h1>
          <p className=" text-xs text-stone-400 phoneX:text-sm">
            Based on your videos
          </p>
        </div>
        <DashboardHeader />
        <div className=" w-full flex flex-col gap-3 py-2 ">
          <DashboardNavigation />

          <Outlet />
        </div>
      </main>
    );
  }
};

export default Dashboard;
