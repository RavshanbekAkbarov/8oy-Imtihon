import { FaCirclePlus } from "react-icons/fa6";
import CardTitle from "../components/CardTitle";
function Home() {
  return (
    <div className=" flex flex-col mx-auto mt-20 align-elements ">
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

      <div className="max-h-[450px] overflow-y-auto space-y-4 pr-2">
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
          {
            id: "#FV2353",
            date: "Due 12 Nov 2021",
            name: "Anita Wainwright",
            amount: "£3,102.04",
            status: "Draft",
          },
          {
            id: "#FV2353",
            date: "Due 12 Nov 2021",
            name: "Anita Wainwright",
            amount: "£3,102.04",
            status: "Draft",
          },
          {
            id: "#FV2353",
            date: "Due 12 Nov 2021",
            name: "Anita Wainwright",
            amount: "£3,102.04",
            status: "Draft",
          },
          {
            id: "#FV2353",
            date: "Due 12 Nov 2021",
            name: "Anita Wainwright",
            amount: "£3,102.04",
            status: "Paid",
          },
          {
            id: "#FV2353",
            date: "Due 12 Nov 2021",
            name: "Anita Wainwright",
            amount: "£3,102.04",
            status: "Draft",
          },
        ].map((data) => (
          <div
            key={data.id}
            className="flex items-center justify-between p-4 rounded-lg shadow-md cursor-pointer list-a "
          >
            <CardTitle
              id={data.id}
              date={data.date}
              name={data.name}
              amount={data.amount}
              status={data.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
