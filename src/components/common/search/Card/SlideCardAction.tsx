import Image from "../Image";

const SlideCardAction = ({
  current,
  showSlide,
  active,
  image,
  title,
}: {
  active: boolean;
  current: number;
  image: string;
  title: string;
  showSlide: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <li
      className={` p-1 rounded-full  ${
        active ? " bg-green-800 md:bg-[#28282C]" : " bg-white md:bg-Primary"
      } flex items-center justify-center cursor-point transition-all duration-200 ease-linear cursor-pointer sm:p-2 md:w-[7.5rem] md:flex-1 md:rounded-md md:justify-normal md:p-[6px] gap-2  relative overflow-hidden `}
      onClick={() => {
        showSlide(current);
      }}
    >
      <div className=" hidden md:flex items-center justify-center relative h-full w-[1.75rem] bg-stone-300 z-30 rounded-sm shrink-0  overflow-hidden">
        <Image src={image} />
      </div>
      <p className=" hidden md:block truncate text-xs text-white font-medium z-30">
        {title}
      </p>
      <div
        className={` hidden md:block h-full ${
          active ? "w-full" : `w-[0%]`
        } absolute top-0 left-0 bg-[#404044]  transition-all duration-[4000ms] ease-linear`}
      ></div>
    </li>
  );
};

export default SlideCardAction;
