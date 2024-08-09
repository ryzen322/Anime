import NavigationList from "./NavigationList";

const NavigationMenu = ({ showMenu }: { showMenu: boolean }) => {
  return (
    <div
      className={`  absolute w-full min-h-[92dvh] overflow-y-scroll no-scrollbar bg-Primary left-0 right-0 bottom-0  z-40 bg-stone-600 ${
        showMenu ? " top-[4rem] opacity-100" : " -top-[100rem] opacity-0"
      } transition-all duration-700 flex flex-col gap-10 p-4 lg:hidden`}
    >
      <h1 className=" text-3xl font-bold">Epic Games</h1>

      <ul className=" flex flex-col gap-10 w-full">
        <NavigationList
          category="Play"
          list={["Fortnite", "Rocket League", "Fall Guys"]}
        />
        <NavigationList
          category="Discover"
          list={["Epic Games Store", "Fab", "SketchFab", "ArtStation"]}
        />
        <NavigationList
          category="Discover"
          list={["Epic Games Store", "Fab", "SketchFab", "ArtStation"]}
        />
        <NavigationList
          category="Discover"
          list={["Epic Games Store", "Fab", "SketchFab", "ArtStation"]}
        />
      </ul>
    </div>
  );
};

export default NavigationMenu;
