import { ReactNode } from "react";

const CardListBoxLoading = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string | undefined;
}) => {
  return (
    <li
      className={` min-w-[300px] max-w-[300px] px-3 flex flex-col gap-3 [&:not(:last-child)]:border-r border-stone-500 ${className} md:min-w-full `}
    >
      {children}
    </li>
  );
};

export default CardListBoxLoading;
