import { useUser } from "@clerk/clerk-react";

export function DashboardHeader() {
  const { user } = useUser();
  return (
    <div className=" w-full h-[20dvh] flex flex-col justify-end gap-2 bg-[#272727] p-4 relative overflow-hidden rounded-t-md mt-2">
      <div className=" flex flex-col">
        <p className=" text-stone-500 text-sm font-semibold leading-5">
          Base On
        </p>
        <h1 className=" text-white text-base font-semibold leading-5">
          {user?.fullName}
        </h1>
        <p className=" text-stone-300 text-sm hover:underline">
          {user?.emailAddresses.map((item) => item.emailAddress)}
        </p>
      </div>
    </div>
  );
}
