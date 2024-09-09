import Portal from "./modal/Portal";

const Watch = (props: { closePortal: () => void }) => {
  return (
    <Portal togglePortal={props.closePortal}>
      <div
        className=" w-[95%] h-[85dvh] bg-stone-600 text-white z-50 rounded-md"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className=" h-10 w-full bg-stone-800 "></div>
      </div>
    </Portal>
  );
};

export default Watch;
