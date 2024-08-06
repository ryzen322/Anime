const SlideCardAction = ({
  current,
  showSlide,
}: {
  current: number;
  showSlide: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <li
      className=" h-[.5rem] w-[.5rem] rounded-full bg-stone-300 flex items-center justify-center cursor-pointer"
      onClick={() => {
        showSlide(current);
      }}
    ></li>
  );
};

export default SlideCardAction;
