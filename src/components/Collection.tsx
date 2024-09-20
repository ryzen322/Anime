import { useParams } from "react-router-dom";
import Layout from "./Layout";

const fakeArray = Array.from({ length: 20 }, (_, index) => index + 1);

const Collection = () => {
  const { title } = useParams();
  title;

  return (
    <Layout>
      <section className=" w-full h-[72.3dvh] relative">
        <ul className=" grid grid-cols-3 gap-3 w-full overflow-y-scroll no-scrollbar h-full">
          {fakeArray.map((_, index) => (
            <li
              key={index}
              className=" h-[175px] min-h-[175px] flex items-center bg-stone-500 rounded-md overflow-hidden relative"
            >
              <img
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-73IhOXpJZiMF.jpg"
                className=" w-full h-full object-cover absolute top-0 left-0"
                alt=""
              />
              <div
                className={`relative w-full h-full top-0 left-0 bottom-0  flex flex-col justify-end items-start bg-gradient-to-b from-[#101014]/10 to-[#16161b] p-2`}
              >
                <h1 className=" text-stone-300 text-xs font-semibold">
                  Attack On Titan
                </h1>
                <div className=" flex items-start flex-wrap clear-start text-[11px] font-medium text-stone-400">
                  <p>Action</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Collection;
