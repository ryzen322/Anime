const SlideCardAction = ({
  current,
  showSlide,
  active,
}: {
  active: boolean;
  current: number;
  showSlide: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <li
      className={` h-[.5rem] w-[.5rem] rounded-full ${
        active ? " bg-green-800" : " bg-white"
      } flex items-center justify-center cursor-point transition-all duration-200 ease-linear`}
      onClick={() => {
        showSlide(current);
      }}
    ></li>
  );
};

export default SlideCardAction;
