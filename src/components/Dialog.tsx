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
  action: () => void;
  anime: string;
}

const Dialog = (props: Actions) => {
  const { icon: Icon, itemExist, title, about, action, anime } = props;
  return (
    <AlertDialog>
      <AlertDialogTrigger className=" text-white">
        <Icon
          className={` text-2xl text-white  ${
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
          <AlertDialogAction onClick={action}>Add</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Dialog;
