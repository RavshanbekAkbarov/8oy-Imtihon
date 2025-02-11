function EditDrawer({ isOpen, setIsOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="list-a ml-24 md:w-[620px] h-full p-12 shadow-lg overflow-y-auto max-h-screen">
        <button onClick={() => setIsOpen(false)}></button>

        <h1 className="text-2xl font-bold mb-12 ">
          Edit
          <span className="text-light3">#</span>XM9141
        </h1>

        <div className="">
          <h3 className="text-primary text-sm font-bold mb-6">Bill From</h3>
          <div className="mb-6">
            <label className="block font-normal text-light2 text-sm mb-2">
              Street Address
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-md border buttons border-gray-600"
              defaultValue="19 Union Terrace"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div>
              <label className="block font-normal text-light2 text-sm mb-2">
                City
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md buttons border border-gray-600"
                defaultValue="London"
              />
            </div>
            <div>
              <label className="block font-normal text-light2 text-sm mb-2">
                Post Code
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md buttons border border-gray-600"
                defaultValue="E1 3EZ"
              />
            </div>
            <div>
              <label className="block font-normal text-light2 text-sm mb-2">
                Country
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md buttons border border-gray-600"
                defaultValue="United Kingdom"
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-primary text-sm font-bold mb-6">Bill To</h3>
            <label className="block font-normal text-light2 text-sm mb-2 border-gray-600">
              Client's Name
            </label>
            <input
              type="text"
              className="w-full p-3 buttons rounded-md border border-gray-600"
              defaultValue="Alex Grim"
            />
          </div>

          <div className="mb-6">
            <label className="block font-normal text-light2 text-sm mb-2">
              Client's Email
            </label>
            <input
              type="email"
              className="w-full border buttons p-3 rounded-md border-gray-600"
              defaultValue="alexgrim@mail.com"
            />
          </div>

          <div className="mb-6">
            <label className="block font-normal  text-light2 text-sm mb-2">
              Street Address
            </label>
            <input
              type="email"
              className="w-full border buttons p-3 rounded-md border-gray-600"
              defaultValue="84 Church Way"
            />
          </div>


          <div className="grid grid-cols-3 gap-4 mb-12">
            <div>
              <label className="block font-normal text-light2 text-sm mb-2">
                City
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md buttons border border-gray-600"
                defaultValue="London"
              />
            </div>
            <div>
              <label className="block font-normal text-light2 text-sm mb-2">
                Post Code
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md buttons border border-gray-600"
                defaultValue="E1 3EZ"
              />
            </div>
            <div>
              <label className="block font-normal text-light2 text-sm mb-2">
                Country
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md buttons border border-gray-600"
                defaultValue="United Kingdom"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 font-bold text-sm mt-10">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-light1 title text-light2 px-6 py-4 rounded-3xl"
            >
              Cancel
            </button>
            <button className="bg-primary text-bgLight px-6 py-4 rounded-3xl">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDrawer;
