import { createPortal } from "react-dom";
import { IoSearch } from "react-icons/io5";
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
        className="    rounded-md  w-[28rem] mb-[40rem] flex flex-col"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className=" w-full h-[4.5rem] bg-[#181818] rounded-md flex items-center p-3">
          <div className=" w-full bg-white h-full rounded-3xl p-4 flex items-center gap-2 ">
            <IoSearch className=" text-2xl" />
            <input
              type="text"
              placeholder="What do you want to listen to?"
              className=" w-full outline-none  font-medium placeholder-stone-500"
            />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export default SearchModal;
