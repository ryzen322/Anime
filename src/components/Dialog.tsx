import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { IconType } from "react-icons/lib";

interface Actions {
  icon: IconType;
  itemExist: boolean;
  title: string;
  about: string;
  anime: string;
  action: () => void;
  actionRemove: () => void;
}

const Dialog = (props: Actions) => {
  const {
    icon: Icon,
    itemExist,
    title,
    about,
    action,
    anime,
    actionRemove,
  } = props;

  console.log(itemExist);
  return (
    <AlertDialog>
      <AlertDialogTrigger className=" text-white">
        <Icon
          className={` text-2xl   ${
            itemExist ? " text-green-500" : "text-white"
          }`}
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {about} {anime}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              itemExist ? actionRemove() : action();
            }}
          >
            {itemExist ? "Remove" : "Add"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Dialog;
