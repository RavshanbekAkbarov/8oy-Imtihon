import { FaTrash } from "react-icons/fa6";
import PaymentForm from "./PaymentForm";
import FormInput from "./FormInput";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneData } from "../hooks/useFetch";

function EditInvoice() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOneData(id)
      .then((res) => {
        setData(res);
        setItems(res.items);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p> Loading....</p>;
  }
  const addNewItem = () => {
    setItems([...items, { name: "", qty: 1, price: 0, total: 0 }]);
  };

  const removeItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

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
            </h1>

            <div className="">
              <h3 className="text-primary text-sm font-bold mb-4">Bill From</h3>
              <FormInput
                type="text"
                name="streetAddress"
                inputName="Street Address"
                defaultValue={data?.senderAddress.street}
              />

              <div className="grid grid-cols-3 gap-4 mb-12">
                <FormInput
                  type="text"
                  name="city"
                  inputName="City"
                  defaultValue={data?.senderAddress?.city}
                />
                <FormInput
                  type="text"
                  name="postCode"
                  inputName="Post Code"
                  defaultValue={data?.senderAddress?.postCode}
                />
                <FormInput
                  type="text"
                  name="country"
                  inputName="Country"
                  defaultValue={data?.senderAddress?.country}
                />
              </div>

              <h3 className="text-primary text-sm font-bold mb-4">Bill To</h3>
              <FormInput
                type="text"
                name="clientName"
                inputName="Client's Name"
                defaultValue={data?.clientName}
              />
              <FormInput
                type="email"
                name="clientEmail"
                inputName="Client's Email"
                defaultValue={data?.clientEmail}
              />
              <FormInput
                type="text"
                name="clientStreetAddress"
                inputName="Street Address"
                defaultValue={data?.clientAddress?.street}
              />

              <div className="grid grid-cols-3 gap-4 mb-4">
                <FormInput
                  type="text"
                  name="clientCity"
                  inputName="City"
                  defaultValue={data?.clientAddress?.city}
                />
                <FormInput
                  type="text"
                  name="clientPostCode"
                  inputName="Post Code"
                  defaultValue={data?.clientAddress?.postCode}
                />
                <FormInput
                  type="text"
                  name="clientCountry"
                  inputName="Country"
                  defaultValue={data?.clientAddress?.country}
                />
              </div>

              <PaymentForm data={data} />
              <FormInput
                type="text"
                name="projectDescription"
                inputName="Project Description"
                defaultValue={data?.description}
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

              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 mb-5  rounded-md w-full "
                >
                  <input
                    type="text"
                    name="itemName"
                    defaultValue={item.name}
                    className="  select-field buttons"
                  />

                  <input
                    type="number"
                    name="quantity"
                    defaultValue={item.quantity}
                    className=" w-[70px] text-center p-3 rounded-sm buttons  font-bold border border-[#52566c] bg-inherit cursor-pointer"
                  />

                  <input
                    type="text"
                    name="price"
                    defaultValue={item.price.toFixed(2)}
                    className=" w-[125px] text-center p-3 rounded-sm  buttons  font-bold border border-[#52566c] bg-inherit cursor-pointer"
                  />

                  <span className="text-light2  w-[120px] font-bold text-base  text-right">
                    £{item.total.toFixed(2)}
                  </span>

                  <button className="text-gray-400 text-lg hover:text-red-500 transition">
                    <FaTrash onClick={() => removeItem(index)} />
                  </button>
                </div>
              ))}

              <button
                className="bg-bgLight text-light2 w-full title font-semibold px-6 py-4 rounded-[30px]"
                type="button"
                onClick={addNewItem}
              >
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
              <label
                htmlFor="edit-drawer"
                className="bg-primary cursor-pointer text-bgLight px-6 py-4 rounded-3xl"
              >
                Save Changes
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditInvoice;
