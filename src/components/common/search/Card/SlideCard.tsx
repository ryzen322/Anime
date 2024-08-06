import Image from "../Image";

const SlideCard = ({ src }: { src: string }) => {
  return (
    <li
      className="  min-w-full p-4 relative transition-all duration-300 flex items-center justify-center"
      id={"child"}
    >
      <div className=" h-[25rem]  rounded-md ">
        <Image className=" w-full h-full object-cover rounded-md" src={src} />
      </div>
    </li>
  );
};

export default SlideCard;
