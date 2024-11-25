import { useEffect, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import NavigationMenu from "./NavigationMenu";
import { FiLogIn } from "react-icons/fi";
import SearchModal from "../modal/SearchModal";
import { togglePortal } from "../../utils/togglePortal";
import { Link } from "react-router-dom";
import { SignInButton, useUser } from "@clerk/clerk-react";
import Image from "../common/search/Image";

const Navigation = () => {
  const [chevState, setCheState] = useState(false);
  const { user } = useUser();

  const [modal, setModal] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  function toggleChev(): void {
    setCheState(!chevState);
  }

  function resizeWindow() {
    if (divRef) {
      const divEl = divRef.current?.getBoundingClientRect();
      if (divEl?.width) {
        divEl.width >= 1024 ? setCheState(false) : "setCartBox(false)";
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
    togglePortal();
  }

  console.log(user);

  return (
    <>
      <header
        ref={divRef}
        className="  font-Roboto font-bold bg-Primary h-[8dvh] text-white fixed w-full top-0 left-0 px-4 flex items-center justify-between z-50 "
      >
        <nav className=" container mx-auto flex items-center gap-2 relative z-50 w-full h-full  lg:gap-5">
          <div className=" flex items-center gap-1">
            <div
              className=" h-[35px] w-[35px] rounded-full bg-stone-700 cursor-pointer flex items-center justify-center"
              onClick={(): void => setCheState(!chevState)}
            >
              {user ? (
                <Image
                  src={user?.imageUrl}
                  className=" w-full h-full rounded-full object-contain"
                />
              ) : (
                <SignInButton>
                  <button className=" w-full h-full rounded-full flex items-center justify-center pr-1">
                    <FiLogIn className=" text-lg text-stone-300 font-bold" />
                  </button>
                </SignInButton>
              )}
            </div>
            <IoChevronDownOutline
              className={` ${
                chevState ? "rotate-180" : "rotate-0"
              } cursor-pointer transition-all duration-200 lg:hidden`}
              onClick={(): void => setCheState(!chevState)}
            />
          </div>
          <Link
            to={"/"}
            className={`text-xl font-semibold uppercase relative ${
              chevState ? " opacity-0" : " opacity-100"
            } transition-all  duration-200 lg:opacity-100`}
          >
            My-Anime
          </Link>

          <Link
            to={`collection/${"Trending"}`}
            className={` hidden md:flex  text-base font-semibold text-stone-300 hover:underline mt-1 ${
              chevState ? " opacity-0" : " opacity-100"
            } transition-all  duration-200 lg:opacity-100`}
          >
            Collection
          </Link>

          <Link
            to={"/"}
            className={` hidden md:flex  text-base font-semibold text-stone-300 hover:underline mt-1 ${
              chevState ? " opacity-0" : " opacity-100"
            } transition-all  duration-200 lg:opacity-100`}
          >
            Store
          </Link>
          <Link
            to={"/news"}
            className={` hidden md:flex  text-base font-semibold text-stone-300 hover:underline mt-1 ${
              chevState ? " opacity-0" : " opacity-100"
            } transition-all  duration-200 lg:opacity-100`}
          >
            News
          </Link>
          <Link
            to={"/dashboard/favorites"}
            className={` hidden md:flex  text-base font-semibold text-stone-300 hover:underline mt-1 ${
              chevState ? " opacity-0" : " opacity-100"
            } transition-all  duration-200 lg:opacity-100`}
          >
            Dashboard
          </Link>

          <div className=" ml-auto flex items-center">
            <IoSearch
              className=" text-2xl cursor-pointer"
              onClick={() => {
                searchModalToggle();
              }}
            />
          </div>
        </nav>
        <NavigationMenu showMenu={chevState} toggle={toggleChev} />
      </header>
      {modal && <SearchModal modalToggle={searchModalToggle} />}
    </>
  );
};

export default Navigation;
