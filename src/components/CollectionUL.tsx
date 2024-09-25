export function CollectionUL({ children }: { children: React.ReactNode }) {
  return (
    <ul className=" flex flex-wrap gap-2 w-full h-full justify-center overflow-y-scroll no-scrollbar relative">
      {children}
    </ul>
  );
}
