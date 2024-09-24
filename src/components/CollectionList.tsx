interface ColletionList {
  image?: string;
  title: string | null;
  inneRef?: React.Ref<HTMLLIElement>;
}

export function CollectionList({ inneRef, image, title }: ColletionList) {
  return (
    <li
      ref={inneRef}
      className=" h-[175px] w-[31.33%] min-w-[31.33%] flex items-center bg-stone-500 rounded-md overflow-hidden relative cursor-pointer sm:w-[20%] sm:min-w-[20%] md:h-[200px] lg:h-[300px] xl:w-[15%] xl:min-w-[15%]"
    >
      <img
        src={`${image}`}
        className=" w-full h-full object-cover absolute top-0 left-0"
        alt=""
      />
      <div
        className={`relative w-full h-full top-0 left-0 bottom-0  flex flex-col justify-end items-start bg-gradient-to-b from-[#101014]/10 to-[#16161b] p-2`}
      >
        <h1 className=" text-stone-300 text-xs font-semibold">{title}</h1>
        <div className=" flex items-start flex-wrap clear-start text-[11px] font-medium text-stone-400">
          <p>Action</p>
        </div>
      </div>
    </li>
  );
}
