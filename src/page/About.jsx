import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

function About() {
  const navigate = useNavigate();
  return (
    <div className="w-[730px]  align-elements">
      <span
        className="flex items-center  cursor-pointer gap-5  mb-8 "
        onClick={() => navigate("/")}
      >
        <GoChevronLeft className="text-primary text-xl" />
        Go back
      </span>

      <div className=" text-white  rounded-lg  mx-auto w-full ">
        <div className="flex  justify-between items-center bg-dark1 mb-6 rounded-lg  px-8 py-5 ">
          <div className="flex  items-center   gap-4">
            <h3 className="text-[14px] font-normal">Status</h3>
            <span className="font-semibold text-amber-500 bg-yellow-700 bg-opacity-10 px-3 py-2 w-[104px]  rounded-md flex items-center justify-center">
              <span className="w-2 h-2 rounded-full mr-2 bg-yellow-500"></span>
              Pending
            </span>
          </div>
          <div className="flex justify-end gap-2 font-bold">
            <button className="bg-slate-800 px-6 py-4 rounded-[30px]">
              Edit
            </button>
            <button className="bg-danger1 px-6 py-4  rounded-[40px]">
              Delete
            </button>
            <button className="bg-primary px-6 py-4  rounded-[40px]">
              Mark as Paid
            </button>
          </div>
        </div>

        <div className="bg-dark1  p-6 rounded-lg">
          <div>
            <h2 className="text-xl font-bold mb-2">#XM9141</h2>
            <p className="text-gray-400 mb-4">Graphic Design</p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-gray-300">
            <div>
              <p className="text-sm">Invoice Date</p>
              <p className="font-semibold">21 Aug 2021</p>
            </div>
            <div>
              <p className="text-sm">Payment Due</p>
              <p className="font-semibold">20 Sep 2021</p>
            </div>
            <div>
              <p className="text-sm">Bill To</p>
              <p className="font-semibold">Alex Grim</p>
              <p>84 Church Way</p>
              <p>Bradford, BD1 9PB</p>
              <p>United Kingdom</p>
            </div>
            <div>
              <p className="text-sm">Sent to</p>
              <p className="font-semibold">alexgrim@mail.com</p>
            </div>
          </div>

          <div className="mt-6 bg-dark2 p-4 rounded-lg">
            <div className="flex justify-between border-b border-gray-600 pb-2 ">
              <span>Item Name</span>
              <span>QTY.</span>
              <span>Price</span>
              <span>Total</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Banner Design</span>
              <span>1</span>
              <span>£156.00</span>
              <span>£156.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Email Design</span>
              <span>2</span>
              <span>£200.00</span>
              <span>£400.00</span>
            </div>
          </div>

          <div className=" bg-black p-4 rounded-lg text-xl font-semibold text-center">
            Amount Due: £556.00
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
