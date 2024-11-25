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
          <AlertDialogTitle className=" font-bold">Service</AlertDialogTitle>
          <AlertDialogTitle className=" font-bold">
            Choose the plan that’s right for you
          </AlertDialogTitle>
          <AlertDialogDescription>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. See our Terms of Use for
            more details.
          </AlertDialogDescription>
          <AlertDialogDescription>
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard,
            and 1 with Basic and Mobile.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className=" grid grid-cols-2 gap-2">
          <AlertDialogAction className=" price rounded-sm text-white font-semibold py-2 cursor-pointer">
            <p>Mobile</p>
            <p>480p</p>
          </AlertDialogAction>
          <AlertDialogAction className=" price rounded-sm text-white font-semibold py-2 cursor-pointer">
            <p>Basic</p>
            <p>720p</p>
          </AlertDialogAction>
          <AlertDialogAction className=" price rounded-sm text-white font-semibold py-2 cursor-pointer">
            <p>Mobile</p>
            <p>1080p</p>
          </AlertDialogAction>
          <AlertDialogAction className=" price rounded-sm text-white font-semibold py-2 cursor-pointer">
            <p>Basic</p>
            <p>4K + HDR</p>
          </AlertDialogAction>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogCollection;
