import { ReactNode } from "react";

export const CardsUI = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <li
      className={`  ease-in-out delay-300 h-[423px] min-w-[230px] rounded-md cursor-pointer relative group overflow-hidden  duration-300  flex flex-col gap-2 snap-center  ${className}`}
    >
      {children}
    </li>
  );
};
