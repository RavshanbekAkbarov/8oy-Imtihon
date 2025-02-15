import { FaCirclePlus } from "react-icons/fa6";
import Cardtitle from "../components/Cardtitle";
import CreateInvoice from "../components/CreateInvoice";
import { useEffect, useState } from "react";
import { getAllData } from "../hooks/useFetch";
import NotFound from "../components/NotFound";

function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
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
    <div className=" flex flex-col mx-auto mt-14 align-elements ">
      <div className="flex justify-between items-center mb-[55px]">
        <div>
          <h1 className="text-[32px] font-bold">Invoices</h1>
          <p>There are {data ? data.length : 0} total invoice</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select className="select w-full  font-semibold border-none">
              <option>Filter by status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Draft</option>
            </select>
          </div>
          <label
            htmlFor="edit-drawer"
            className="bg-primary text-white font-semibold cursor-pointer drawer-button  text-[14px] flex items-center px-4 py-3 rounded-full gap-3 shadow-md"
          >
            <FaCirclePlus className="text-3xl" />
            New Invoice
          </label>
        </div>
      </div>

      <div className="max-h-[500px] overflow-y-auto space-y-4 ">
        {data.length > 0 ? <Cardtitle /> : <NotFound />}
      </div>
      <CreateInvoice />
    </div>
  );
}

export default Home;
