import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";
import NavigationList from "./NavigationList";
import { QueryClient } from "@tanstack/react-query";

const NavigationMenu = ({
  showMenu,
  toggle,
}: {
  showMenu: boolean;
  toggle: () => void;
}) => {
  const { user } = useUser();

  const queryClient = new QueryClient();

  return (
    <div
      className={` container mx-auto absolute w-full min-h-[93dvh] overflow-y-scroll no-scrollbar bg-Primary  left-0 right-0 bottom-0  z-40  ${
        showMenu ? " top-[4rem] opacity-100" : " -top-[100rem] opacity-0"
      } transition-all duration-700 flex flex-col gap-10 p-4 lg:hidden`}
    >
      <h1 className=" text-3xl font-bold">Welcome To My-Anime</h1>

      <ul className=" flex flex-col gap-10 w-full">
        <NavigationList
          closeModal={toggle}
          category="Navigation"
          list={["News", "Store", "News", "Dashboard"]}
        />
        {/* <NavigationList
          category="Discover"
          list={["Epic Games Store", "Fab", "SketchFab", "ArtStation"]}
        /> */}
      </ul>

      <div className=" w-full flex flex-col gap-1 px-6 text-white">
        {!user ? (
          <SignInButton>
            <button className=" w-full py-2 rounded-md price">Sign In</button>
          </SignInButton>
        ) : (
          <>
            <h1 className="text-lg">Welcome Back</h1>
            <p className=" text-sm">Name: {user?.fullName}</p>
            <SignOutButton>
              <button
                className=" w-full py-2 rounded-md bg-stone-800"
                onClick={() => {
                  queryClient.clear();
                }}
              >
                Logout
              </button>
            </SignOutButton>
          </>
        )}
      </div>
    </div>
  );
};

export default NavigationMenu;
