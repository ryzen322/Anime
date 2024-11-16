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
import { SignInButton, useUser } from "@clerk/clerk-react";

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

  const { isSignedIn } = useUser();

  console.log(isSignedIn);

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
          <AlertDialogTitle>
            {isSignedIn ? `${title} ${anime}` : "Youre not login "}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isSignedIn
              ? about
              : "Please login before you add this anime to your favorite list"}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {isSignedIn ? (
            <AlertDialogAction
              className={` ${itemExist ? " bg-red-500 text-white" : ""}`}
              onClick={() => {
                itemExist ? actionRemove() : action();
              }}
            >
              {itemExist ? "Remove" : "Add"}
            </AlertDialogAction>
          ) : (
            <SignInButton>
              <AlertDialogAction>Login</AlertDialogAction>
            </SignInButton>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Dialog;
