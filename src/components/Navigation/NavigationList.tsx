import { Link } from "react-router-dom";

const NavigationList = ({
  category,
  list,
  closeModal,
}: {
  category: string;
  list: string[];
  closeModal: () => void;
}) => {
  return (
    <li className=" flex flex-col gap-1">
      <h1 className=" text-lg">{category}</h1>
      {list.map((item, index) => (
        <Link
          key={index}
          to={`/${
            item.toLowerCase() === "dashboard"
              ? "dashboard"
              : item.toLowerCase()
          }`}
          onClick={closeModal}
          className=" flex items-center h-[2.5rem] px-4 rounded-md cursor-pointer hover:bg-slate-600"
        >
          <h1 className=" text-sm"> {item}</h1>
        </Link>
      ))}
    </li>
  );
};

export default NavigationList;
