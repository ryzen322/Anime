import Image from "../Image";

const Card = () => {
  return (
    <ul className=" w-full flex items-center overflow-x-scroll h-[13rem] gap-2 no-scrollbar relative">
      <li className=" h-full w-[8rem] min-w-[8rem] rounded-md cursor-pointer relative group overflow-hidden">
        <div className=" h-full w-full text-white relative -z-0">asd</div>

        <Image
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-WBsBl0ClmgYL.jpg"
          className=" w-full h-full object-cover rounded-md absolute  top-0 left-0 -z-10"
        />

        <div className="bg-gradient-to-b from-black/10 to-black/65 absolute w-full h-full top-0 left-0"></div>
      </li>
    </ul>
  );
};

export default Card;
