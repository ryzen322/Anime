import { dummyApi } from "../../api/dummyApi";

const NavigationBox = () => {
  const [play, discovery, create] = dummyApi;
  return (
    <div className=" container m-auto hidden lg:flex absolute h-[31.5rem] w-[38rem] bg-[#28282C]/85 rounded-xl top-[6rem] z-30  2xl:left-[12rem]">
      <ul className=" w-[45%] h-full flex flex-col">
        <li className=" flex flex-col  justify-center h-full border-[0.25px] border-[#cccc]/25 rounded-tl-xl px-8">
          <h1 className=" mb-2 text-lg">{play.category}</h1>
          {play.item.map((item) => (
            <span
              key={item.id}
              className=" rounded-md hover:bg-[#4e4f52]/85 w-full h-[2.5rem] flex items-center px-4 font-medium text-base cursor-pointer"
            >
              {item.name}
            </span>
          ))}
        </li>
        <li className=" flex flex-col  justify-center h-full border-l-[0.25px] border-b-[0.25px] border-r-[0.25px] border-[#cccc]/25 rounded-bl-xl px-8">
          <h1 className=" mb-2 text-lg">{discovery.category}</h1>
          {discovery.item.map((item) => (
            <span
              key={item.id}
              className=" rounded-md hover:bg-[#4e4f52]/85 w-full h-[2.5rem] flex items-center px-4 font-medium text-base cursor-pointer"
            >
              {item.name}
            </span>
          ))}
        </li>
      </ul>
      <ul className=" flex-1 h-full flex flex-col">
        <li className=" flex flex-col  justify-center h-full border-r-[0.25px] border-t-[0.25px] border-b-[0.25px] border-[#cccc]/25 rounded-tr-xl rounded-br-xl px-8">
          <h1 className=" mb-2 text-lg">{create.category}</h1>
          {create.item.map((item) => (
            <span
              key={item.id}
              className=" rounded-md hover:bg-[#4e4f52]/85 w-full h-[2.5rem] flex items-center px-4 font-medium text-base cursor-pointer"
            >
              {item.name}
            </span>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default NavigationBox;
