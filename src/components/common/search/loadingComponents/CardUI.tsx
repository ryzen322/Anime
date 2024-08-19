import { ReactNode } from "react";

export const CardUI = ({ children }: { children: ReactNode }) => {
  return (
    <ul
      className={` w-full flex items-center overflow-x-scroll gap-4 no-scrollbar relative snap-x`}
    >
      {children}
    </ul>
  );
};
