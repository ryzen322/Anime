import { useUser } from "@clerk/clerk-react";

export function DashboardHeader() {
  const { user } = useUser();
  return (
    <div className=" w-full h-[25dvh] flex items-center gap-2 bg-stone-800 px-4 relative overflow-hidden rounded-md md:h-[30dvh] md:mt-3">
      <div className=" w-full h-full absolute top-0 left-0">
        <img
          src="https://timelinecovers.pro/facebook-cover/download/anime-one-piece-thousand-sunny-facebook-cover.jpg"
          className=" w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className=" h-[6rem] w-[6rem] rounded-full  overflow-hidden relative z-10">
        <img
          src={user?.imageUrl}
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=" relative flex flex-col gap-2 z-10">
        <h1 className=" text-lg font-medium text-stone-300">
          {user?.firstName}
        </h1>
        <p className=" text-base font-medium text-stone-300 hover:underline">
          {user?.emailAddresses.map((item) => item.emailAddress)}
        </p>
      </div>
      <div className=" bg-black/45 absolute w-full h-full top left-0 rounded-sm" />
    </div>
  );
}
