import Portal from "./modal/Portal";

const Watch = (props: { closePortal: () => void }) => {
  return (
    <Portal togglePortal={props.closePortal}>
      <div
        className=" w-[90%] h-[15rem] bg-stone-600 text-white z-50 rounded-md"
        onClick={(event) => {
          event.stopPropagation();
        }}
      ></div>
    </Portal>
  );
};

export default Watch;
