import { useState } from "react";
import Image from "../Image";
import { FaPlus } from "react-icons/fa6";

const SlideCard = ({ src }: { src: string }) => {
  const [toggleText, setToggleText] = useState(false);
  const string = `Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans.<br><br>
Flash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.<br><br>
(Source: MangaHelpers)`;
  const text = string.split(" ").slice(0, 6);
  const textSTring = [...text].toString().replaceAll(",", " ");
  return (
    <li
      className="  min-w-full p-4 relative transition-all duration-300 flex items-center justify-center"
      id={"child"}
    >
      <div className=" h-[30rem] w-full rounded-md relative">
        <div className=" absolute w-full h-full right-0 left-0 bg-gradient-to-b from-black/10 to-black/65 z-20 p-4 rounded-md flex flex-col">
          <div className=" w-[2rem] h-[2rem] bg-black/85 ml-auto rounded-full border-[2px] flex items-center justify-center hover:bg-black">
            <FaPlus className=" text-white text-lg" />
          </div>
          <div className=" mt-auto text-white flex flex-col ">
            <h1 className=" text-xl font-bold">Attack on Titan</h1>
            <p className=" text-xs font-semibold text-stone-300">Rating: 84</p>
            <span className=" text-xs font-semibold text-stone-300">
              Adventure, Action, Drama
            </span>
            <div
              className={` relative ${
                toggleText
                  ? "h-[1rem] overflow-y-scroll flex gap-1"
                  : " min-h-[7rem] max-h-[5rem] flex flex-col overflow-y-scroll"
              } transition-all duration-200 ease-linear`}
            >
              <p
                className=" text-xs relative top-0 bottom-0"
                dangerouslySetInnerHTML={{
                  __html: toggleText ? `${textSTring}` : `${string} ...`,
                }}
                onClick={() => setToggleText(!toggleText)}
              />
              <p
                className=" text-stone-400 text-xs text-right cursor-pointer"
                onClick={() => setToggleText(!toggleText)}
              >
                {toggleText ? "more" : ""}
              </p>
            </div>
          </div>
        </div>
        <Image
          className=" w-full h-full object-cover rounded-md scale-95"
          src={src}
        />
      </div>
    </li>
  );
};

export default SlideCard;
