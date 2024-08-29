import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const CardsUI = ({
  children,
  className,
  detailId,
}: {
  children: ReactNode;
  className: string;
  detailId: string;
}) => {
  return (
    <Link
      to={`detail/${detailId}`}
      className={`  ease-in-out delay-300 h-[423px] min-w-[230px] rounded-md cursor-pointer relative group overflow-hidden  duration-300  flex flex-col gap-2 snap-center  ${className}`}
    >
      {children}
    </Link>
  );
};
