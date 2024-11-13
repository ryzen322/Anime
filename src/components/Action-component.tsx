import { IconType } from "react-icons/lib";
import Dialog from "./Dialog";

interface Actions {
  icon: IconType;
  itemExist: boolean;
  text: string;
  actionFunction: () => void;
  anime: string;
}

const ActionComponent = (props: Actions) => {
  const { icon: Icon, itemExist, text, actionFunction, anime } = props;

  return (
    <div className=" w-full absolute z-30 flex flex-col p-1  cursor-pointer">
      <div className=" flex gap-2 items-center relative">
        <button
          className={` bg-black/80 flex items-center justify-center w-8 h-8 rounded-sm cursor-pointer relative group/item transition-all duration-200`}
        >
          <Dialog
            icon={Icon}
            itemExist={itemExist}
            about="Add your favorite anime"
            title="Favorite"
            action={actionFunction}
            anime={anime}
          />

          <div className=" absolute h-8 w-20 bg-black/80 rounded-sm flex items-center justify-center left-[2.5rem] opacity-0 group-hover/item:opacity-100">
            <h1 className=" text-white text-sm font-semibold ">{text}</h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ActionComponent;
