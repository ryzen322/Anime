import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardNavigation } from "../components/DashboardNavigation";

const Dashboard = () => {
  return (
    <main className=" container mx-auto mt-[3.90rem] mb-2 h-[81dvh] flex flex-col gap-2">
      <DashboardHeader />
      <div className=" w-full flex flex-col gap-2 px-4"></div>
      <DashboardNavigation />
    </main>
  );
};

export default Dashboard;
