import { useEffect, useRef, useState } from "react";
import SlideCardAction from "./SlideCardAction";

import { AnimeObj } from "../../../../types";
import SlideCard from "./SlideCard";
import { useGetAllList } from "@/server/service";
import { existingItem } from "@/utils";

const SlideCardUl = ({ item }: { item: AnimeObj[] | undefined }) => {
  const [viewScroll, setViewScroll] = useState(0);
  const [stopScroll, setStopScroll] = useState(true);
  const [increment, setIncrement] = useState(true);
  const intervalRef = useRef<HTMLLIElement | null>(null);
  const refEl = useRef<HTMLUListElement | null>(null);

  const { data } = useGetAllList();

  const value = existingItem(item!, data!);

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

  useEffect(() => {
    if (stopScroll) {
      const timex = setInterval(() => {
        setViewScroll((prevCount) => {
          if (prevCount === 5) {
            setIncrement(false);
            return prevCount - 1;
          } else if (prevCount === 0) {
            setIncrement(true);
            return prevCount + 1;
          } else {
            return increment ? prevCount + 1 : prevCount - 1;
          }
        });
      }, 6000);
      return () => clearInterval(timex);
    }
  }, [viewScroll, increment, stopScroll]);

  return (
    <>
      <ul
        ref={refEl}
        className=" w-full  flex items-center rounded-md overflow-hidden relative transition-all duration-200 ease-in-out"
        id={"parent"}
      >
        {value.map((data, index) => (
          <SlideCard
            ref={intervalRef}
            key={data.id}
            image={data.image ? data.image : ""}
            description={data.description}
            coverImage={data.cover}
            active={index === viewScroll ? true : false}
            genres={data.genres}
            rating={data.rating}
            title={data.title.english ?? data.title.userPreferred}
            stopScrolling={setStopScroll}
            id={data.id}
            collection={data.collection}
            duration={data.duration}
            total_episode={data.totalEpisodes}
            type={data.type}
          />
        ))}
      </ul>

      <ul className=" flex items-center justify-center  gap-2 md:flex-col md:gap-1">
        {value.map((data, index) => (
          <SlideCardAction
            key={data.id}
            current={index}
            active={index === viewScroll}
            showSlide={setViewScroll}
            image={data.image ? data.image : ""}
            title={data.title.userPreferred}
            stopScrolling={setStopScroll}
          />
        ))}
      </ul>
    </>
  );
};

export default SlideCardUl;
