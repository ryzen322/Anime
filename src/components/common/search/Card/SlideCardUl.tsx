import { useEffect, useRef, useState } from "react";
import SlideCardAction from "./SlideCardAction";
import SlideCard from "./SlideCard";
import { popularAnimeType } from "../../../../types";

const SlideCardUl = ({ item }: { item: popularAnimeType }) => {
  const [viewScroll, setViewScroll] = useState(0);
  const refEl = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (refEl) {
      const selectElParent = document.querySelector(`#${refEl.current?.id}`);

      const selectChild =
        selectElParent?.querySelectorAll<HTMLElement>("#child");
      if (selectChild) {
        selectChild.forEach((el, index) => {
          if (index === 0) {
            el.style.left = `-${viewScroll * 100}%`;
          } else {
            el.style.right = `${viewScroll * 100}%`;
          }
        });
      }
    }
  }, [viewScroll]);

  return (
    <>
      <ul
        ref={refEl}
        className=" w-full  flex items-center  rounded-md  gap-1 overflow-hidden relative transition-all duration-200 ease-in-out "
        id={"parent"}
      >
        {item.results.map((data) => (
          <SlideCard key={data.id} src={data.image} />
        ))}
      </ul>

      <ul className=" flex items-center justify-center gap-2">
        {item.results.map((data, index) => (
          <SlideCardAction
            key={data.id}
            current={index}
            active={index === viewScroll}
            showSlide={setViewScroll}
          />
        ))}
      </ul>
    </>
  );
};

export default SlideCardUl;
