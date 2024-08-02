import { createPortal } from "react-dom";
import { IoSearch } from "react-icons/io5";

import { useSearchAnime } from "../../hooks/useSearchAnime";
import { Link } from "react-router-dom";

const SearchModal = ({ modalToggle }: { modalToggle: () => void }) => {
  const { queries, setFilter } = useSearchAnime();

  function closeModal() {
    modalToggle();
    const portalEl = document.querySelector("#portal");
    portalEl?.classList.add("hidden");
  }

  return createPortal(
    <div
      className=" w-full h-full flex  justify-center items-center relative z-40"
      onClick={() => closeModal()}
    >
      <div
        className=" w-[24.5rem]  flex flex-col bg-[#181818] rounded-md"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className=" w-full h-[4.5rem]  rounded-md flex items-center p-3">
          <div className=" w-full bg-white h-full rounded-3xl p-4 flex items-center gap-2 ">
            <IoSearch className=" text-2xl" />
            <input
              type="text"
              placeholder="What do you want to listen to?"
              className=" w-full outline-none  font-medium placeholder-stone-500"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            />
          </div>
        </div>
        <ul className=" flex flex-col min-h-[25rem] max-h-[25rem] overflow-y-scroll px-3 no-scrollbar">
          {queries.data?.results?.map((item) => (
            <Link
              key={item.id}
              to={""}
              className=" w-full min-h-[4rem] bg-stone-500 rounded-md"
            >
              <p>{item.title.english}</p>
            </Link>
          ))}
          {queries.isLoading && (
            <div className=" w-full min-h-[4rem] bg-stone-500 rounded-md animate-pulse"></div>
          )}
        </ul>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export default SearchModal;
