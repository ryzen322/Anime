import {
  AlertDialog,
  AlertDialogAction,
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
  description: string;
  title: string;
}

const DialogDetail = (props: DialogType) => {
  const { icon: Icon, description, title } = props;

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Icon className=" h-full text-3xl" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className=" font-bold">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogDetail;
