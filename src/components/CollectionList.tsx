interface ColletionList {
  image?: string;
  title: string | null;
  inneRef?: React.Ref<HTMLLIElement>;
}

export function CollectionList({ inneRef, image, title }: ColletionList) {
  return (
    <li
      ref={inneRef}
      className=" h-[175px] w-[115px] flex items-center bg-stone-500 rounded-md overflow-hidden relative phoneX:w-[150px] sm:w-[146px] md:w-[175px] md:h-[250px]"
    >
      <img
        src={`${image}`}
        className=" w-full h-full object-cover absolute top-0 left-0"
        alt=""
      />
      <div
        className={`relative w-full h-full top-0 left-0 bottom-0 flex flex-col justify-end items-start bg-gradient-to-b from-[#101014]/10 to-[#16161b] p-2`}
      >
        <h1 className=" text-stone-300 text-xs font-semibold text-center w-full">
          {title}
        </h1>
      </div>
    </li>
  );
}
