import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalType {
  children: ReactNode;
  togglePortal: () => void;
}

const Portal = ({ children, togglePortal }: PortalType) => {
  function closePortal() {
    togglePortal();
  }

  return createPortal(
    <div
      className=" h-dvh w-full flex  justify-center items-center relative z-40"
      onClick={closePortal}
    >
      {children}
    </div>,
    document.getElementById("portal")!
  );
};

export default Portal;
