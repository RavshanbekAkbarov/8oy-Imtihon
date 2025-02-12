import { BiChevronRight } from "react-icons/bi";

import { Link } from "react-router-dom";

function Cardtitle({ id, name, date, amount, status }) {
  return (
    <Link to={`/about/${id}`} className="flex justify-between w-full">
      <div className="flex items-center gap-10">
        <span className="font-bold">{id}</span>
        <span className="text-gray-500">{date}</span>
        <span className="text-blue-600">{name}</span>
      </div>
      <div className="flex items-center space-x-4 ">
        <span className="font-bold mr-5">{amount}</span>
        <span
          className={`font-semibold px-3 py-2 w-[104px]  rounded-md flex items-center justify-center ${
            status === "Paid"
              ? "text-green-600 bg-green-700 bg-opacity-10 "
              : status === "Pending"
              ? "text-amber-500 bg-yellow-700 bg-opacity-10"
              : "text-gray-500 bg-gray-700 bg-opacity-10"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full mr-2 ${
              status === "Paid"
                ? "bg-green-500"
                : status === "Pending"
                ? "bg-yellow-500"
                : "bg-gray-500"
            }`}
          ></span>
          {status}
        </span>
        <span className="text-primary cursor-pointer text-xl">
          <BiChevronRight />
        </span>
      </div>
    </Link>
  );
}
export default Cardtitle;
