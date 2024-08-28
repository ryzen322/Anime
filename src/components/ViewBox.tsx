import { dummyData } from "../api/dummyApi";
import CardList from "./common/search/loadingComponents/CardList";

import { ListBox } from "./ListBox";

export function ViewBox() {
  const loading = true;

  const value = dummyData(3).map((item) => <CardList key={item.id} />);

  return (
    <ul className=" flex items-center overflow-x-scroll no-scrollbar gap-1 md:grid md:grid-cols-3 md:gap-2 ">
      {loading ? (
        value
      ) : (
        <>
          <ListBox />
          <ListBox />
          <ListBox />
        </>
      )}
    </ul>
  );
}
