import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className=" container mx-auto flex flex-col gap-8 px-4 mt-[6rem] mb-[3rem]"
      id="main"
    >
      {children}
    </main>
  );
};

export default Layout;
