import Portal from "./modal/Portal";
import { PlayerHeader } from "./PlayerHeader";

const fakeArray = Array.from({ length: 100 }, (_, index) => index + 1);

const Watch = (props: { closePortal: () => void }) => {
  return (
    <Portal togglePortal={props.closePortal}>
      <section
        className=" w-[98%] h-dvh mt-14 text-white z-50 rounded-md bg-Primary flex flex-col gap-4 md:w-[90%] lg:w-[80%] xl:w-[60%] xl:mt-10 2xl:w-[980px]"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className=" aspect-video rounded-t-md overflow-hidden relative">
          <PlayerHeader />
        </div>
        <div className=" flex flex-col px-6 gap-6">
          <div className=" w-full flex justify-between items-center">
            <h1 className=" font-semibold text-xl">Episodes</h1>
          </div>
          <div
            className={` w-full h-[30rem] overflow-y-scroll no-scrollbar grid grid-cols-7 gap-1 bgston`}
          >
            {fakeArray.map((_, index) => (
              <div
                key={index}
                className=" h-[3.5rem] bg-stone-500 rounded-sm cursor-pointer flex justify-center items-center"
              >
                <span className=" text-white text-xs">EP {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Portal>
  );
};

export default Watch;
