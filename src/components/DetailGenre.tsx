interface Genre {
  title: string;
  list: string[] | undefined;
}

export const DetailGenre = (props: Genre) => {
  const { list, title } = props;
  return (
    <div className=" flex flex-col gap-2">
      <h1 className=" text-stone-400 font-bold">{title}</h1>
      <div className=" flex items-center flex-wrap gap-2">
        {list?.map((item) => (
          <p
            key={item}
            className=" text-white py-1 px-2 font-semibold bg-[#343437] rounded-md"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
