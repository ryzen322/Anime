export const ChannelSocial = () => {
  const sochmedList = ["Facebook", "Discord", "Instagram", "Twitter"];

  return (
    <div className=" w-full bg-[#202024] rounded-md border-l-8 border-[#26BBFF] flex flex-col gap-4 p-4">
      <div className=" flex flex-col gap-1">
        <h1 className=" text-white font-semibold">Keep in touch!</h1>
        <p className=" text-stone-400 text-sm font-semibold">
          Join to our fastest growing social media
        </p>
      </div>
      <div className=" flex items-center flex-wrap gap-2 h-full">
        {sochmedList.map((item) => (
          <p
            key={item}
            className=" rounded-md border bg-[#202024] border-stone-500/50 text-white font-semibold py-1 px-2"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
