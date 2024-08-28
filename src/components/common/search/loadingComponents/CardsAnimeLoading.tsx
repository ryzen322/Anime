import { ReactNode } from "react";

const CardsAnimeLoading = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <li
      className={`h-[300.78px] rounded-md  relative cursor-pointer overflow-hidden group  flex flex-col ${className} sm:h-[400px] lg:h-[350px] xl:h-[400px]`}
    >
      {children}
    </li>
  );
};

export default CardsAnimeLoading;
