import Image from "../Image";

const Cards = () => {
  return (
    <li className="  ease-in-out delay-300 h-[192px] min-w-[124px] rounded-md cursor-pointer relative group overflow-hidden hover:min-w-[20rem] duration-300">
      <div className=" h-full w-full text-white relative -z-0 flex flex-col justify-end p-1 "></div>

      <Image
        src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-WBsBl0ClmgYL.jpg"
        className=" w-full h-full object-cover rounded-md absolute  top-0 left-0 -z-10"
      />

      <div className="bg-gradient-to-b from-black/10 to-black/65 absolute w-full h-full top-0 left-0"></div>
    </li>
  );
};

export default Cards;
