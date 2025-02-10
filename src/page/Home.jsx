import { BiChevronDown } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";
import { BiChevronRight } from "react-icons/bi";

function Home() {
  return (
    <div className="w-[750px] flex flex-col mx-auto mt-20 ml-[355px]">
      <div className="flex justify-between items-center mb-[65px]">
        <div>
          <h1 className="text-[32px] font-bold">Invoices</h1>
          <p className="text-[12px]">There are 7 total invoices</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select className="select w-full max-w-xs bg-inherit font-semibold border-none">
              <option>Filter by status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Draft</option>
            </select>
          </div>
          <button className="bg-primary text-white font-semibold text-[14px] flex items-center px-4 py-3 rounded-full gap-3 shadow-md">
            <FaCirclePlus className="text-3xl" />
            New Invoice
          </button>
        </div>
      </div>

      {[
        {
          id: "#RT3080",
          date: "Due 19 Aug 2021",
          name: "Jensen Huang",
          amount: "£1,800.90",
          status: "Paid",
        },
        {
          id: "#XM9141",
          date: "Due 20 Sep 2021",
          name: "Alex Grim",
          amount: "£556.00",
          status: "Pending",
        },
        {
          id: "#RG0314",
          date: "Due 01 Oct 2021",
          name: "John Morrison",
          amount: "£14,002.33",
          status: "Paid",
        },
        {
          id: "#RT2080",
          date: "Due 12 Oct 2021",
          name: "Alysa Werner",
          amount: "£102.04",
          status: "Pending",
        },
        {
          id: "#FV2353",
          date: "Due 12 Nov 2021",
          name: "Anita Wainwright",
          amount: "£3,102.04",
          status: "Draft",
        },
      ].map((invoice) => (
        <div
          key={invoice.id}
          className="flex items-center justify-between p-4 rounded-lg shadow-md cursor-pointer mb-4  "
        >
          <div className="flex items-center gap-10">
            <span className="font-bold">{invoice.id}</span>
            <span className="text-gray-500">{invoice.date}</span>
            <span className="text-blue-600">{invoice.name}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-bold">{invoice.amount}</span>
            <span
              className={`font-semibold px-3 py-1 rounded-md flex items-center ${
                invoice.status === "Paid"
                  ? "text-green-500 bg-green-100"
                  : invoice.status === "Pending"
                  ? "text-yellow-500 bg-yellow-100"
                  : "text-gray-500 bg-gray-100"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full mr-2 ${
                  invoice.status === "Paid"
                    ? "bg-green-500"
                    : invoice.status === "Pending"
                    ? "bg-yellow-500"
                    : "bg-gray-500"
                }`}
              ></span>
              {invoice.status}
            </span>
            <span className="text-primary cursor-pointer text-xl">
              <BiChevronRight />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
