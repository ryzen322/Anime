import { createPortal } from "react-dom";
import { IoSearch } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSearchAnime } from "../../hooks/useSearchAnime";
import SearchUl from "../common/search/SearchUl";
import SearchComp from "../SearchComp";
import SearchList from "../SearchList";
import SearchError from "../common/search/Error/SearchError";

const SearchModal = ({ modalToggle }: { modalToggle: () => void }) => {
  const { queries, setFilter } = useSearchAnime();

  function closeModal() {
    modalToggle();
    const portalEl = document.querySelector("#portal");
    portalEl?.classList.add("hidden");
  }

  return createPortal(
    <div
      className=" h-dvh w-full flex  justify-center items-center relative z-40"
      onClick={() => closeModal()}
    >
      <div
        className=" w-[24.5rem] min-h-[31rem]  flex flex-col  rounded-md bg-[#181818] sm:w-[30rem]"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className=" w-full h-[4.5rem] p-3 rounded-md flex items-center bg-[#181818] ">
          <div className=" w-full bg-white h-full rounded-3xl p-4 flex items-center gap-2 ">
            <IoSearch className=" text-2xl" />
            <input
              type="text"
              placeholder="Search Anime you like sample One Piece"
              className=" w-full outline-none  font-medium placeholder-stone-500 placeholder:text-sm"
              onChange={(e) => {
                setFilter(e.target.value.toLowerCase());
              }}
            />
            {queries.isLoading && (
              <AiOutlineLoading3Quarters className=" text-2xl animate-spin" />
            )}
          </div>
        </div>

        <>
          {queries.isError ? (
            <SearchError error={queries.error.message} />
          ) : (
            !queries.isLoading && (
              <SearchUl className=" gap-0" loading={queries.isLoading}>
                {queries.data?.results?.map((item) => (
                  <SearchList
                    genre={item.genres}
                    key={item.id}
                    src={item.image}
                    type={item.type}
                    title={item.title.userPreferred}
                  />
                ))}
              </SearchUl>
            )
          )}

          {queries.isLoading && <SearchComp isLoading={!queries.isLoading} />}
        </>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export default SearchModal;
