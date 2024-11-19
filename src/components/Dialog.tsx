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
  text: string;
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
    text,
  } = props;

  const { isSignedIn } = useUser();

  return (
    <AlertDialog>
      <AlertDialogTrigger className=" text-white">
        <Icon
          className={` text-xl   ${
            itemExist ? " text-green-500" : "text-white"
          }`}
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{`${title} ${anime}`}</AlertDialogTitle>
          <AlertDialogDescription
            dangerouslySetInnerHTML={{
              __html: `${about}`,
            }}
          />
          {!isSignedIn && (
            <AlertDialogDescription className=" text-stone-700 font-semibold">{`
You must log in to your account to add items to your playlist. `}</AlertDialogDescription>
          )}
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
              {itemExist ? "Remove" : ` ${text}`}
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
