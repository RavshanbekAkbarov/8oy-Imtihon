import { FaCirclePlus } from "react-icons/fa6";
import Cardtitle from "../components/Cardtitle";
import HomeDrawer from "../components/HomeDrewer";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useFetch();
  return (
    <div className=" flex flex-col mx-auto mt-16 align-elements ">
      <div className="flex justify-between items-center mb-[55px]">
        <div>
          <h1 className="text-[32px] font-bold">Invoices</h1>
          {data ? `There are 7 total invoices` : `No Invoices`}
          {/* <p className="text-[12px]">There are 7 total invoices</p> */}
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
          <button
            className="bg-primary text-white font-semibold text-[14px] flex items-center px-4 py-3 rounded-full gap-3 shadow-md"
            onClick={() => setIsOpen(true)}
          >
            <FaCirclePlus className="text-3xl" />
            New Invoice
          </button>
        </div>
      </div>

      <div className="max-h-[450px] overflow-y-auto space-y-4 ">
        <Cardtitle />
      </div>
      <HomeDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default Home;
