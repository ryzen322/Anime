import { createPortal } from "react-dom";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
const SearchModal = ({ modalToggle }: { modalToggle: () => void }) => {
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
        className=" w-[26rem]  flex flex-col h-[80dvh]  bg-[#181818] rounded-md"
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
            />
          </div>
        </div>
        <ul className=" flex flex-col">
          <Link to={""} className=" w-full h-[4rem] "></Link>
        </ul>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export default SearchModal;
