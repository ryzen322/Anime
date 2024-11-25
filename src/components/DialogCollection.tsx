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

interface DialogType {
  icon: IconType;
}

const DialogCollection = (props: DialogType) => {
  const { icon: Icon } = props;

  return (
    <AlertDialog>
      <AlertDialogTrigger className=" flex items-center justify-center bg-[#7E8183] text-white hover:bg-[#7E8183]/75 rounded-sm px-[1.5rem] phoneX:text-lg h-[2rem] xl:h-[2.75rem] xl:text-2xl">
        {<Icon className=" h-full text-2xl" />}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogCollection;
