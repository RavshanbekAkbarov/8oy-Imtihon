import { BiChevronRight } from "react-icons/bi";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

function Cardtitle() {
  const { data } = useFetch();
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
              <span className="  ">Due {res.paymentDue}</span>
              <span className="  ">{res.clientName}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-bold  mr-5">£{res.total.toFixed(2)}</span>
              <StatusBadge status={res.status} />

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
