import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditDrawer from "../components/EditDrawer";
function About() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[770px]   align-elements ">
      <span
        className="flex items-center  cursor-pointer gap-5 font-bold mb-8 "
        onClick={() => navigate("/")}
      >
        <GoChevronLeft className="text-primary text-lg  " />
        Go back
      </span>

      <div className="    rounded-lg   w-full ">
        <div className="flex  justify-between items-center list-a mb-6 rounded-lg  px-8 py-5 ">
          <div className="flex  items-center   gap-4">
            <h3 className="text-[14px] text-light3 font-normal">Status</h3>
            <span className="font-semibold text-amber-500 bg-yellow-700 bg-opacity-10 px-3 py-2 w-[104px]  rounded-md flex items-center justify-center">
              <span className="w-2 h-2 font-bold text-sm rounded-full mr-2 bg-yellow-500"></span>
              Pending
            </span>
          </div>
          <div className="flex justify-end gap-2 font-semibold text-bgLight">
            <button
              className="bg-bgLight title text-light2 px-6 py-4 rounded-[30px]"
              onClick={() => setIsOpen(true)}
            >
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
        <div className="p-8 rounded-lg list-a overflow-y-auto h-[450px]">
          <div className="flex justify-between ">
            <div>
              <h2 className="text-lg font-bold mb-2">
                <span className="text-light3">#</span>XM9141
              </h2>
              <p className=" text-sm text-light3 mb-12">Graphic Design</p>
            </div>
            <div className="text-end text-sm  font-normal text-light3 ">
              <p>19 Union Terrace</p>
              <p>London</p>
              <p>E1 3EZ</p>
              <p>United Kingdom</p>
            </div>
          </div>

          <div className="grid grid-cols-3 mb-12">
            <div>
              <div className="mb-8">
                <p className="text-sm mb-2  text-light3">Invoice Date</p>
                <p className=" text-lg font-bold">21 Aug 2021</p>
              </div>
              <div>
                <p className="text-sm mb-2    text-light3">Payment Due</p>
                <p className=" text-lg font-bold">20 Sep 2021</p>
              </div>
            </div>

            <div className="">
              <p className="text-sm mb-3 text-light3">Bill To</p>
              <p className="text-lg font-bold mb-2">Alex Grim</p>
              <p className="text-light3 font-normal text-sm">84 Church Way</p>
              <p className="text-light3 font-normal text-sm">Bradford</p>
              <p className="text-light3 font-normal text-sm"> BD1 9PB</p>
              <p className="text-light3  font-normal text-sm ">
                United Kingdom
              </p>
            </div>
            <div>
              <p className="text-sm mb-3 text-light3">Sent to</p>
              <p className="text-lg font-bold">alexgrim@mail.com</p>
            </div>
          </div>

          <div className="  bg-light4 title flex  justify-between p-8 items-center rounded-t-lg  ">
            <div className="">
              <span className="block font-normal mb-8  text-sm text-light3">
                Item Name
              </span>
              <span className="block text-base  font-bold mb-8">
                Banner Design
              </span>
              <span className="block text-base  font-bold ">Email Design</span>
            </div>
            <div className="flex  text-base gap-20">
              <div className="text-center">
                <span className="block text-light3   text-sm font-normal mb-8">
                  QTY.
                </span>
                <span className="block mb-8 font-bold text-light3">1</span>
                <span className="block font-bold text-light3">2</span>
              </div>
              <div className="   text-right">
                <span className="block text-light3 font-normal text-sm mb-8">
                  Price
                </span>
                <span className="block font-bold mb-8 text-light3">
                  £156.00
                </span>
                <span className="block font-bold text-light3">£200.00</span>
              </div>
              <div className=" text-right">
                <span className="block font-normal  text-sm text-light3 mb-8">
                  Total
                </span>
                <span className="block font-bold mb-8">£156.00</span>
                <span className="block font-bold">£400.00</span>
              </div>
            </div>
          </div>
          <div className=" amount flex justify-between  items-center  p-6 rounded-b-lg ">
            <p className="  font-normal   text-bgLight">Amount Due</p>
            <p className=" font-bold text-3xl   text-bgLight">£556.00</p>
          </div>
        </div>
      </div>
      <EditDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default About;
