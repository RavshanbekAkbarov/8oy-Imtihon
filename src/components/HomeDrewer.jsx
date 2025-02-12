import { FaTrash } from "react-icons/fa6";

function HomeDrawer({ isOpen, setIsOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50   ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className=" ml-24 md:w-[620px] h-full  shadow-lg amount overflow-y-auto max-h-screen">
        <div className="p-14 ">
          <button onClick={() => setIsOpen(false)}></button>

          <h1 className="text-2xl font-bold mb-10 ">New Invoice</h1>

          <div className="">
            <h3 className="text-primary text-sm font-bold mb-4">Bill From</h3>
            <div className="mb-4">
              <label className="label">Street Address</label>
              <input type="text" className="select-field buttons" />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div>
                <label className="label">City</label>
                <input type="text" className="select-field buttons" />
              </div>
              <div>
                <label className="label">Post Code</label>
                <input type="text" className="select-field buttons" />
              </div>
              <div>
                <label className="label">Country</label>
                <input type="text" className="select-field buttons" />
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-primary text-sm font-bold mb-4">Bill To</h3>
              <label className="label">Client's Name</label>
              <input type="text" className="select-field buttons" />
            </div>
            <div className="mb-4">
              <label className="label">Client's Email</label>
              <input
                type="email"
                className="select-field buttons"
                defaultValue="e.g. email@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="label">Street Address</label>
              <input type="email" className="select-field buttons" />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="label">City</label>
                <input type="text" className="select-field buttons" />
              </div>
              <div>
                <label className="label">Post Code</label>
                <input type="text" className="select-field buttons" />
              </div>
              <div>
                <label className="label">Country</label>
                <input type="text" className="select-field buttons" />
              </div>
            </div>
            <div className="grid grid-cols-2  gap-6 mb-6">
              <div className="w-full ">
                <label className="label">Project Description</label>
                <input
                  type="date"
                  className="select-field buttons"
                  defaultValue="21 Aug 2021"
                />
              </div>
              <div className="w-full">
                <label className="label ">Payment Terms</label>
                <select className="w-full p-[14px] rounded-md font-bold border border-[#52566c] bg-inherit cursor-pointer buttons">
                  <option>Days</option>
                  <option>Next 1 day</option>
                  <option>Next 7 days</option>
                  <option>Next 14 days</option>
                  <option>Next 30 days</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="label">Project Description</label>
              <input
                type="email"
                className="select-field buttons"
                defaultValue="Graphic Design "
              />
            </div>
            <div className="grid grid-cols-4 text-light2 font-semibold mb-2 text-sm">
              <span className="text-left">Item Name</span>
              <span className="text-end">Qty.</span>
              <span className="text-center">Price</span>
              <span className="text-center">Total</span>
            </div>
            <div className="flex items-center gap-4 mb-5  rounded-md w-full ">
              <input
                type="text"
                defaultValue="Email Design"
                className=" select-field buttons   w-full "
              />

              <input
                type="text"
                defaultValue="2"
                className=" w-[55px] text-center p-3 rounded-sm buttons  font-bold border border-[#52566c] bg-inherit cursor-pointer"
              />

              <input
                type="text"
                defaultValue="200.00"
                className=" w-[100px] text-center p-3 rounded-sm  buttons  font-bold border border-[#52566c] bg-inherit cursor-pointer"
              />

              <span className="text-light2 font-bold text-base  text-right">
                400.00
              </span>

              <button className="text-gray-400 text-lg hover:text-red-500 transition">
                <FaTrash />
              </button>
            </div>{" "}
            <div className="flex items-center gap-4 mb-5  rounded-md w-full ">
              <input
                type="text"
                defaultValue="Email Design"
                className=" select-field buttons   w-full "
              />

              <input
                type="text"
                defaultValue="2"
                className=" w-[55px] text-center p-3 rounded-sm buttons  font-bold border border-[#52566c] bg-inherit cursor-pointer"
              />

              <input
                type="text"
                defaultValue="200.00"
                className=" w-[100px] text-center p-3 rounded-sm  buttons  font-bold border border-[#52566c] bg-inherit cursor-pointer"
              />

              <span className="text-light2 font-bold text-base  text-right">
                400.00
              </span>

              <button className="text-gray-400 text-lg hover:text-red-500 transition">
                <FaTrash />
              </button>
            </div>
            <button className="bg-bgLight text-light2 w-full title font-semibold px-6 py-4 rounded-[30px]">
              + Add New Item
            </button>
          </div>
        </div>

        <div className="sticky bottom-0 left-0  p-8 buttons-bottom  rounded-lg   w-full ">
          <div className="flex justify-between  items-center font-bold text-sm ">
            <div>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-bgLight  text-light2 px-6 py-3 rounded-3xl"
              >
                Discard
              </button>
            </div>
            <div>
              <button className="bg-light2 text-light1 px-6 py-3 rounded-3xl mr-2">
                Save as Draft
              </button>
              <button className="bg-primary text-bgLight px-6 py-3 rounded-3xl">
                Save & Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDrawer;
