import { useState } from "react";

export const Description = ({ description }: { description: string }) => {
  const [showmore, setShowmore] = useState(false);

  const descLength = description?.length > 853 ? true : false;

  return (
    <article
      className={`w-full ${
        showmore ? "h-auto pb-10" : ""
      } flex flex-col gap-2 relative overflow-hidden`}
    >
      <p
        className=" text-stone-300 font-semibold text-sm relative"
        dangerouslySetInnerHTML={{
          __html: `${description} `,
        }}
      />
      {descLength && (
        <div
          className={`absolute w-full h-full top-0 left-0 bottom-0  flex flex-col justify-end items-start ${
            !showmore ? "bg-gradient-to-b from-[#101014]/10 to-[#101014]" : ""
          }`}
        >
          <button
            className=" text-blue-400 cursor-pointer font-semibold"
            onClick={() => setShowmore(!showmore)}
          >
            {showmore ? "show less" : "show more"}
          </button>
        </div>
      )}
    </article>
  );
};
