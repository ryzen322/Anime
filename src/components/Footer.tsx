import {
  FaTelegramPlane,
  FaDiscord,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" container mx-auto h-[10dvh] w-full bg-[#202020] flex items-center justify-between p-4 rounded-t-md ">
      <ul className=" text-stone-200 text-xs px-2 flex flex-col gap-1 font-semibold sm:flex-row sm:gap-2">
        <li className=" cursor-pointer hover:underline">Kurasaw.com</li>
        <li className=" text-stone-500 font-bold  hover:underline">
          Terms & condition
        </li>
        <li className=" text-stone-500 font-bold  hover:underline">Contacts</li>
      </ul>
      {/* <ul className=" h-full grid grid-cols-4 gap-2 py-4 phoneX:py-3">
        <li className=" bg-stone-200 rounded-md w-10 flex items-center justify-center cursor-pointer">
          <FaTelegramPlane size={32} />
        </li>
        <li className=" bg-stone-200 rounded-md w-10 flex items-center justify-center cursor-pointer">
          <FaDiscord size={32} />
        </li>
        <li className=" bg-stone-200 rounded-md w-10 flex items-center justify-center cursor-pointer">
          <FaYoutube size={32} />
        </li>
        <li className=" bg-stone-200 rounded-md w-10 flex items-center justify-center cursor-pointer">
          <FaInstagram size={32} />
        </li>
      </ul> */}
      <ul className=" flex items-center gap-2">
        <li className=" bg-stone-200 rounded-md w-10 flex items-center justify-center cursor-pointer">
          <FaTelegramPlane size={28} />
        </li>
        <li className=" bg-stone-200 rounded-md w-10 flex items-center justify-center cursor-pointer">
          <FaDiscord size={28} />
        </li>
        <li className=" bg-stone-200 rounded-md w-10 flex items-center justify-center cursor-pointer">
          <FaYoutube size={28} />
        </li>
        <li className=" bg-stone-200 rounded-md w-10 flex items-center justify-center cursor-pointer">
          <FaInstagram size={28} />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
