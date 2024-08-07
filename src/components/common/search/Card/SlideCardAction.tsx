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
      className={` p-1 rounded-full ${
        active ? " bg-green-800" : " bg-white"
      } flex items-center justify-center cursor-point transition-all duration-200 ease-linear cursor-pointer sm:p-2`}
      onClick={() => {
        showSlide(current);
      }}
    ></li>
  );
};

export default SlideCardAction;
