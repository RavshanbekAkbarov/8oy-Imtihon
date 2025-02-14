import { BiChevronRight } from "react-icons/bi";
import { getAllData } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";
import { useEffect, useState } from "react";

function Cardtitle() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    setLoading(true);
    getAllData()
      .then((res) => {
        setData(res);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p> Loading....</p>;
  }

  return (
    <div className="">
      {data?.map((item) => (
        <Link
          to={`/about/${item.id}`}
          key={item.id}
          className="flex justify-between w-full"
        >
          <div className="flex w-full items-center justify-between text-start p-5 mb-2 rounded-lg shadow-md cursor-pointer list-a ">
            <div className=" flex items-center gap-12">
              <span className="font-bold   ">#{item.id}</span>
              <span className="flex gap-1  ">
                <p> Due </p>
                {new Date(item.paymentDue).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span className="  ">{item.clientName}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-bold  mr-5">£{item.total.toFixed(2)}</span>
              <StatusBadge status={item.status} />

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
