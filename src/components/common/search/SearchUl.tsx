import React from "react";

const SearchUl = ({
  children,
  loading,
  className,
}: {
  children: React.ReactNode;
  loading: boolean | undefined;
  className: string;
}) => {
  return (
    <ul
      className={` flex flex-col ${className} ${
        !loading ? "h-[25rem]" : "h-0"
      }  overflow-y-scroll rounded-b-md no-scrollbar transition-all duration-100 ease-in-out px-3 bg-[#181818]`}
    >
      {children}
    </ul>
  );
};

export default SearchUl;
