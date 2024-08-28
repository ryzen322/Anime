import { ReactNode } from "react";

const CardViewBox = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div className={` grid grid-rows-5 h-[447px] ${className} 2xl:h-[749px]`}>
      {children}
    </div>
  );
};

export default CardViewBox;
