export function ViewCardsBox() {
  return (
    <div className=" w-full rounded-md flex items-center gap-3 p-3 cursor-pointer hover:bg-[#202024] md:min-w-full md:max-w-full ">
      <div className=" w-[64px] h-full bg-stone-300 rounded-md shrink-0 md:w-[48px] xl:bg-green-300 xl:w-[60px] 2xl:w-[96px]"></div>
      <div className=" flex flex-col justify-center h-full gap-2 overflow-hidden">
        <p className=" text-white font-semibold truncate">Black Myth: Wukong</p>
        <p className=" text-stone-300 font-semibold text-sm">₱2,599</p>
      </div>
    </div>
  );
}
