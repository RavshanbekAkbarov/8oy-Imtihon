import { BiChevronRight } from "react-icons/bi";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Cardtitle() {
  const { data } = useFetch();
  console.log(data);

  if (!data) return <p>Loading....</p>;

  return (
    <div className="">
      {data.map((res) => (
        <Link
          to={`/about/${res.id}`}
          key={res.id}
          className="flex justify-between w-full"
        >
          <div className="flex w-full items-center justify-between text-start p-5 mb-2 rounded-lg shadow-md cursor-pointer list-a ">
            <div className=" flex items-center gap-12">
              <span className="font-bold   ">#{res.id}</span>
              <span className="  ">{res.paymentDue}</span>
              <span className="  ">{res.clientName}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-bold  mr-5">£{res.total.toFixed(2)}</span>
              <span
                className={`font-semibold px-3 py-2 w-[104px] rounded-md flex items-center justify-center ${
                  res.status.toLowerCase() === "paid"
                    ? "text-green-500 bg-green-900 bg-opacity-20"
                    : res.status.toLowerCase() === "pending"
                    ? "text-amber-500 bg-yellow-700 bg-opacity-10"
                    : "text-gray-500 bg-gray-700 bg-opacity-10"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full mr-2 ${
                    res.status.toLowerCase() === "paid"
                      ? "bg-green-500"
                      : res.status.toLowerCase() === "pending"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                  }`}
                ></span>
                {res.status.charAt(0).toUpperCase() + res.status.slice(1)}
              </span>

              <span className="text-primary cursor-pointer text-xl">
                <BiChevronRight />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Cardtitle;
