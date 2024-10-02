const NewsItems = () => {
  return (
    <li className=" h-full w-[7.5rem] min-w-[7.5rem]  rounded-md relative">
      <div className="  w-full h-full overflow-hidden rounded-md relative">
        <img
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156822-Jzo2ITWgm4kM.jpg"
          alt=""
          className=" w-full h-full object-cover relative"
        />
        <div className=" h-full w-full absolute top-0 left-0 bg-gradient-to-b from-black/10 to-black/65 z-20 rounded-md"></div>
      </div>
    </li>
  );
};

export default NewsItems;
