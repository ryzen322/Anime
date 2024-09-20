import { useEffect, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import NavigationMenu from "./NavigationMenu";
import NavigationBox from "./NavigationBox";
import SearchModal from "../modal/SearchModal";
import { togglePortal } from "../../utils/togglePortal";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [chevState, setCheState] = useState(false);
  const [cartBox, setCartBox] = useState(false);
  const [modal, setModal] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  function resizeWindow() {
    if (divRef) {
      const divEl = divRef.current?.getBoundingClientRect();
      if (divEl?.width) {
        divEl.width >= 1024 ? setCheState(false) : setCartBox(false);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  function searchModalToggle() {
    setModal(!modal);
    console.log("clicked");
    togglePortal();
  }

  return (
    <header
      ref={divRef}
      className="  font-Roboto font-bold bg-Primary h-[8dvh] text-white fixed w-full top-0 left-0 px-4 flex items-center justify-between z-50 "
    >
      <nav className=" container mx-auto flex items-center gap-2 relative z-50 w-full h-full  lg:gap-5">
        <div className=" flex items-center gap-1">
          <div
            className=" h-[35px] w-[35px] rounded-full bg-stone-700 cursor-pointer"
            onClick={(): void => setCheState(!chevState)}
          />
          <IoChevronDownOutline
            className={` ${
              chevState ? "rotate-180" : "rotate-0"
            } cursor-pointer transition-all duration-200 lg:hidden`}
            onClick={(): void => setCheState(!chevState)}
          />

          <div
            className=" hidden  lg:flex  h-[8dvh]items-center justify-center "
            onMouseOver={(e): void => {
              setCartBox(true);
              e.preventDefault();
            }}
          >
            <IoChevronDownOutline
              className={` ${
                chevState ? "rotate-180" : "rotate-0"
              } cursor-pointer transition-all duration-200 hidden  lg:block`}
            />
          </div>
        </div>
        <Link
          to={"/"}
          className={`text-xl font-semibold uppercase relative ${
            chevState ? " opacity-0" : " opacity-100"
          } transition-all  duration-200`}
        >
          My-Anime
        </Link>
        <h1 className=" hidden lg:flex  text-base font-normal mt-1 ">
          Support
        </h1>

        <h1 className=" hidden lg:flex  text-base font-normal mt-1 ">
          Distribute
        </h1>

        <div className=" ml-auto ">
          <IoSearch
            className=" text-2xl cursor-pointer"
            onClick={searchModalToggle}
          />
          {modal && <SearchModal modalToggle={searchModalToggle} />}
        </div>
      </nav>
      <NavigationMenu showMenu={chevState} />
      {cartBox && <NavigationBox />}
    </header>
  );
};

export default Navigation;
