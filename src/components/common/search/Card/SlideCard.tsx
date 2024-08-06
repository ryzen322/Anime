import Image from "../Image";

const SlideCard = ({ src }: { src: string }) => {
  return (
    <li
      className="  min-w-full p-4 relative transition-all duration-300 flex items-center justify-center"
      id={"child"}
    >
      <div className=" h-[30rem] w-full rounded-md relative">
        <div className=" absolute w-full h-full right-0 left-0 bg-gradient-to-b from-black/10 to-black/65 z-20 p-4 rounded-md"></div>
        <Image
          className=" w-full h-full object-cover rounded-md scale-95"
          src={src}
        />
      </div>
    </li>
  );
};

export default SlideCard;
