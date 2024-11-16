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
import { useRemoveFavorites } from "@/server/action";
import { CiEdit } from "react-icons/ci";

interface DialogType {
  id: string;
  title: string;
  description: string;
}

const DashboardDialog = (props: DialogType) => {
  const { id, title, description } = props;

  const { mutateAsync } = useRemoveFavorites();

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <CiEdit />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription
            dangerouslySetInnerHTML={{
              __html: `${description} `,
            }}
          ></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className=" bg-red-500"
            onClick={async () => {
              mutateAsync({ id, title });
            }}
          >
            Remove
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DashboardDialog;
