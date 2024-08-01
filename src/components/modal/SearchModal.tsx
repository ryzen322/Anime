import { createPortal } from "react-dom";

const SearchModal = ({ modalToggle }: { modalToggle: () => void }) => {
  function closeModal() {
    modalToggle();
    const portalEl = document.querySelector("#portal");
    portalEl?.classList.add("hidden");
  }

  return createPortal(
    <div className=" w-full h-full flex items-center justify-center">
      <div
        className=" h-[25rem] w-[25rem] bg-stone-500 rounded-md"
        onClick={() => closeModal()}
      ></div>
    </div>,
    document.getElementById("portal")!
  );
};

export default SearchModal;
