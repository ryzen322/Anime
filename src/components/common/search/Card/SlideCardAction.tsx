import Image from "../Image";

const SlideCardAction = ({
  current,
  showSlide,
  active,
  image,
  title,
  stopScrolling,
}: {
  active: boolean;
  current: number;
  image?: string;
  title: string;
  showSlide: React.Dispatch<React.SetStateAction<number>>;
  stopScrolling: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <li
      className={` p-1 rounded-full  ${
        active ? " bg-green-800 md:bg-[#28282C]" : " bg-white md:bg-Primary"
      } flex items-center justify-center cursor-point transition-all duration-200 ease-linear cursor-pointer sm:p-2 md:w-[7.5rem] md:flex-1 md:rounded-md md:justify-normal gap-2 relative overflow-hidden  lg:w-[11rem] lg:p-1 lg:px-2 xl:w-[15rem]`}
      onClick={() => {
        showSlide(current);
      }}
      onMouseEnter={() => {
        stopScrolling(false);
      }}
      onMouseLeave={() => {
        stopScrolling(true);
      }}
    >
      <div className=" hidden md:flex items-center justify-center relative h-[2.15rem] w-[1.75rem] bg-stone-300  rounded-sm shrink-0 z-10 overflow-hidden lg:w-[2.5rem] lg:h-[3.20rem] xl:h-[4.5rem] xl:w-[3.5rem]">
        <Image src={image} className=" w-full h-full object-cover" />
      </div>
      <p className=" hidden z-10 md:block truncate text-xs text-white font-medium  lg:text-sm xl:text-lg">
        {title}
      </p>
      <div
        className={` hidden md:block h-full ${
          active ? "w-full" : `w-[0%]`
        } absolute top-0 left-0 bg-[#404044] transition-all  duration-slideCart ease-linear`}
      ></div>
    </li>
  );
};

export default SlideCardAction;
