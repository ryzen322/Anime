import { ListBox } from "./ListBox";

export function ViewBox() {
  return (
    <ul className=" flex items-center overflow-x-scroll no-scrollbar gap-1 md:grid md:grid-cols-3 md:gap-2 ">
      <ListBox />
      <ListBox />
      <ListBox />
    </ul>
  );
}
