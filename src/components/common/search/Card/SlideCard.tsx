import Image from "../Image";

const SlideCard = ({ src }: { src: string }) => {
  return (
    <li
      className=" child-0 min-w-full h-full p-2 relative transition-all duration-300 "
      id={"child"}
    >
      <div className=" h-full w-full p-2">
        <Image className=" w-full h-full object-cover rounded-md" src={src} />
      </div>
    </li>
  );
};

export default SlideCard;
