import { FaTrash } from "react-icons/fa6";
import PaymentForm from "./PaymentForm";
import useProduct from "../hooks/useProduct";
import FormInput from "./FormInput";

function EditDrawer() {
  const { loading, product } = useProduct();
  if (loading) return <p>Loading....</p>;

  return (
    <div className="drawer">
      <input id="edit-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="edit-drawer" className="drawer-overlay"></label>
        <div className=" ml-24 md:w-[720px] h-full  shadow-lg amount overflow-y-auto max-h-screen">
          <div className="  p-14 ">
            <h1 className="text-2xl font-bold mb-12 ">
              Edit
              <span className="text-light3">#</span>
              {product.id}
            </h1>

            <div className="">
              <h3 className="text-primary text-sm font-bold mb-4">Bill From</h3>
              <FormInput
                type="text"
                name="streetAddress"
                inputName="Street Address"
                placeholder={product?.senderAddress?.street}
              />

              <div className="grid grid-cols-3 gap-4 mb-12">
                <FormInput
                  type="text"
                  name="city"
                  inputName="City"
                  placeholder={product?.senderAddress?.city}
                />
                <FormInput
                  type="text"
                  name="postCode"
                  inputName="Post Code"
                  placeholder={product?.senderAddress?.postCode}
                />
                <FormInput
                  type="text"
                  name="country"
                  inputName="Country"
                  placeholder={product?.senderAddress?.country}
                />
              </div>

              <h3 className="text-primary text-sm font-bold mb-4">Bill To</h3>
              <FormInput
                type="text"
                name="clientName"
                inputName="Client's Name"
                placeholder={product?.clientName}
              />
              <FormInput
                type="email"
                name="clientEmail"
                inputName="Client's Email"
                placeholder={product?.clientEmail}
              />
              <FormInput
                type="text"
                name="clientStreetAddress"
                inputName="Street Address"
                placeholder={product?.clientAddress?.street}
              />

              <div className="grid grid-cols-3 gap-4 mb-4">
                <FormInput
                  type="text"
                  name="clientCity"
                  inputName="City"
                  placeholder={product?.clientAddress?.city}
                />
                <FormInput
                  type="text"
                  name="clientPostCode"
                  inputName="Post Code"
                  placeholder={product?.clientAddress?.postCode}
                />
                <FormInput
                  type="text"
                  name="clientCountry"
                  inputName="Country"
                  placeholder={product?.clientAddress?.country}
                />
              </div>

              <PaymentForm product={product} />
              <FormInput
                type="text"
                name="projectDescription"
                inputName="Project Description"
                placeholder={product?.description}
              />
              <h3 className="text-light2 text-lg font-bold mb-4 mt-8">
                Item List
              </h3>

              <div className="grid grid-flow-col text-light2 font-bold mb-2 text-sm">
                <span className="text-left">Item Name</span>
                <span className="text-end">Qty.</span>
                <span className="text-center">Price</span>
                <span className="text-center">Total</span>
              </div>

              <div className="flex items-center gap-4 mb-5  rounded-md w-full ">
                <input
                  type="text"
                  defaultValue="Email Design"
                  className="  select-field buttons"
                />

                <input
                  type="text"
                  defaultValue="2"
                  className=" w-[70px] text-center p-3 rounded-sm buttons  font-bold border border-[#52566c] bg-inherit cursor-pointer"
                />

                <input
                  type="text"
                  defaultValue="200.00"
                  className=" w-[125px] text-center p-3 rounded-sm  buttons  font-bold border border-[#52566c] bg-inherit cursor-pointer"
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
          <div className="sticky bottom-0 left-0  p-8 buttons-bottom   shadow-4xl rounded-t-4xl   w-full">
            <div className="flex justify-end gap-3 items-center font-bold text-sm">
              <label
                className="bg-light1 title text-light2 px-6 py-4 rounded-3xl cursor-pointer "
                htmlFor="edit-drawer"
              >
                Cancel
              </label>
              <button className="bg-primary text-bgLight px-6 py-4 rounded-3xl">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDrawer;
