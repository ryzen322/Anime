import { IconType } from "react-icons/lib";
import Dialog from "./Dialog";

interface Actions {
  icon: IconType;
  itemExist: boolean;
  text: string;
  actionFunction: () => void;
  anime: string;
  actionRemove: () => void;
  about: string;
  description: string;
}

const ActionComponent = (props: Actions) => {
  const {
    icon: Icon,
    itemExist,
    text,
    actionFunction,
    actionRemove,
    anime,
    about,
  } = props;

  return (
    <div className=" w-full relative top-0 z-30 flex justify-end  cursor-pointer">
      <div className=" flex gap-2 items-center relative">
        <div
          className={` bg-black/80 flex items-center justify-center w-8 h-8 rounded-sm cursor-pointer relative group/item transition-all duration-200`}
        >
          <Dialog
            icon={Icon}
            itemExist={itemExist}
            about={about}
            title="Title:"
            action={actionFunction}
            actionRemove={actionRemove}
            anime={anime}
            text={text}
          />

          <div className=" absolute h-8 w-24 bg-black/80 rounded-sm flex items-center justify-center right-[2.5rem] opacity-0 group-hover/item:opacity-100">
            <h1 className=" text-white text-sm font-semibold ">{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionComponent;
