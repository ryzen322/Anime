import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

import NavigationMenu from "./NavigationMenu";

const Navigation = () => {
  const [chevState, setCheState] = useState(false);
  return (
    <header className=" font-Roboto font-bold bg-Primary h-[8dvh] text-white relative px-4 flex items-center justify-between z-10">
      <nav className=" flex items-center gap-3 relative z-20 w-full h-full bg-Primary">
        <div className=" flex items-center gap-1">
          <div
            className=" h-[35px] w-[35px] rounded-full bg-stone-700 cursor-pointer"
            onClick={(): void => setCheState(!chevState)}
          />
          <IoChevronDownOutline
            className={` ${
              chevState ? "rotate-180" : "rotate-0"
            } cursor-pointer transition-all duration-200`}
            onClick={(): void => setCheState(!chevState)}
          />
        </div>
        <h1
          className={`text-xl font-semibold uppercase relative ${
            chevState ? " opacity-0" : " opacity-100"
          } transition-all  duration-200`}
        >
          My-Anime
        </h1>
      </nav>
      <NavigationMenu showMenu={chevState} />
    </header>
  );
};

export default Navigation;
