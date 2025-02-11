import { FaTrash } from "react-icons/fa6";

function HomeDrawer({ isOpen, setIsOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50   ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="list-a ml-24 md:w-[620px] h-full p-12 shadow-lg amount overflow-y-auto max-h-screen">
        <button onClick={() => setIsOpen(false)}></button>

        <h1 className="text-2xl font-bold mb-12 ">New Invoice</h1>

        <div className="">
          <h3 className="text-primary text-sm font-bold mb-4">Bill From</h3>
          <div className="mb-4">
            <label className="label">Street Address</label>
            <input
              type="text"
              className="select-field buttons"
              defaultValue="19 Union Terrace"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div>
              <label className="label">City</label>
              <input
                type="text"
                className="select-field buttons"
                defaultValue="London"
              />
            </div>
            <div>
              <label className="label">Post Code</label>
              <input
                type="text"
                className="select-field buttons"
                defaultValue="E1 3EZ"
              />
            </div>
            <div>
              <label className="label">Country</label>
              <input
                type="text"
                className="select-field buttons"
                defaultValue="United Kingdom"
              />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-primary text-sm font-bold mb-4">Bill To</h3>
            <label className="label">Client's Name</label>
            <input
              type="text"
              className="select-field buttons"
              defaultValue="Alex Grim"
            />
          </div>

          <div className="mb-4">
            <label className="label">Client's Email</label>
            <input
              type="email"
              className="select-field buttons"
              defaultValue="alexgrim@mail.com"
            />
          </div>

          <div className="mb-4">
            <label className="label">Street Address</label>
            <input
              type="email"
              className="select-field buttons"
              defaultValue="84 Church Way"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="label">City</label>
              <input
                type="text"
                className="select-field buttons"
                defaultValue="London"
              />
            </div>
            <div>
              <label className="label">Post Code</label>
              <input
                type="text"
                className="select-field buttons"
                defaultValue="E1 3EZ"
              />
            </div>
            <div>
              <label className="label">Country</label>
              <input
                type="text"
                className="select-field buttons"
                defaultValue="United Kingdom"
              />
            </div>
          </div>

          <div className="grid grid-cols-2  gap-6 mb-6">
            <div className="w-full ">
              <label className="label">Project Description</label>
              <input
                type="date"
                className="select-field buttons"
                defaultValue="Graphic Design"
              />
            </div>
            <div className="w-full">
              <label className="label ">Payment Terms</label>
              <select className="w-full p-[14px] rounded-sm font-bold border border-[#DFE3FA] bg-inherit cursor-pointer buttons">
                <option>Filter by status</option>
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
              defaultValue="Graphic Design"
            />
          </div>

          <div>
            <h2 className=" font-bold text-light2  mb-4 text-xl">Item List</h2>
            <div className=" flex  gap-4  mb-5 w-[520px]   items-center rounded-t-lg  ">
              <div className=" ">
                <span className="block font-normal mb-5 text-sm ">
                  Item Name
                </span>
                <input
                  className="select-field text-black  buttons mb-5 "
                  defaultValue="Graphic Design"
                />
                <input
                  className="select-field listItem buttons  "
                  defaultValue="Graphic Design"
                />
              </div>
              <div className="flex  text-base gap-5">
                <div className="text-start w-[50px]  ">
                  <span className="block   text-sm font-normal mb-5">QTY.</span>
                  <input
                    type="text"
                    className="select-field  buttons text-center mb-5"
                    defaultValue="1"
                  />
                  <input
                    type="text"
                    className="select-field buttons text-center"
                    defaultValue="1"
                  />
                </div>
                <div className=" w-[100px]   text-start">
                  <span className="block font-normal text-sm mb-5">Price</span>
                  <input
                    type="text"
                    className="select-field buttons mb-5"
                    defaultValue="Price"
                  />
                  <input
                    type="text"
                    className="select-field buttons"
                    defaultValue="Price"
                  />
                </div>
                <div className=" text-right ">
                  <span className="block font-normal  text-start text-sm  mb-8">
                    Total
                  </span>
                  <span className=" flex gap-6 font-bold   mb-12">
                    £156.00
                    <button>
                      <FaTrash className="text-gray-400 hover:text-red-500" />
                    </button>
                  </span>
                  <span className="flex  gap-6 font-bold">
                    £400.00
                    <button>
                      <FaTrash className="text-gray-400 hover:text-red-500" />
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-bgLight text-light2 w-full title font-semibold px-6 py-4 rounded-[30px]">
              + Add New Item
            </button>
          </div>

          <div className="flex justify-between  items-center font-bold text-sm mt-10">
            <div>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-bgLight  text-light2 px-6 py-3 rounded-3xl"
              >
                Discard
              </button>
            </div>
            <div className="">
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
