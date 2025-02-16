import { FaTrash } from "react-icons/fa6";
import PaymentForm from "./PaymentForm";
import FormInput from "./FormInput";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneData } from "../hooks/useFetch";

function EditInvoice() {
  const { id } = useParams();
  const drawerRef = useRef(null);
  const formRef = useRef(null);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOneData(id)
      .then((res) => {
        setData(res);
        setItems(res.items);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>loading...</p>;
  }
  const handleReload = () => {
    window.location.reload();
  };
  const updateInvoice = async (e) => {
    e.preventDefault();
    const updatedData = {
      clientName: e.target.clientName.value,
      clientEmail: e.target.clientEmail.value,
      senderAddress: {
        street: e.target.senderStreet.value,
        city: e.target.senderCity.value,
        postCode: e.target.senderPostCode.value,
        country: e.target.senderCountry.value,
      },
      clientAddress: {
        street: e.target.street.value,
        city: e.target.city.value,
        postCode: e.target.postCode.value,
        country: e.target.country.value,
      },
      createdAt: e.target.invoiceDate.value,
      paymentTerms: e.target.paymentTerms.value,
      description: e.target.projectDescription.value,
      items,
    };
    console.log("qoshildii");

    try {
      const response = await fetch(`http://localhost:3000/data/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Ma'lumotni yangilashda xatolik!");
      }
      handleReload();
    } catch (error) {
      console.error(error);
      alert("Xatolik yuz berdi!");
    }
  };

  const addNewItem = () => {
    setItems([
      ...items,
      { id: Date.now(), name: "", quantity: 1, price: 0, total: 0 },
    ]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (id, field, value) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
              total:
                (field === "quantity" ? value : item.quantity) *
                (field === "price" ? value : item.price),
            }
          : item
      )
    );
  };

  return (
    <div>
      <div className="drawer">
        <input
          ref={drawerRef}
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className=" bg-bgLight title text-light2 px-6 py-4 d rounded-[30px] cursor-pointer flex   drawer-button"
          >
            <p> Edit</p>
          </label>
        </div>
        <form
          ref={formRef}
          className="drawer-side  h-full lg:ml-24  "
          onSubmit={updateInvoice}
        >
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div>
            <ul className="menu max-w-[670px] mt-[103px]  amount list-a text-base-content h-full lg:mt-0 rounded-tr-2xl  ">
              <div className="  p-14 ">
                <h1 className="text-2xl font-bold mb-12 ">
                  Edit
                  <span className="text-light3">#</span>
                  {data?.id}
                </h1>

                <div className="">
                  <h3 className="text-primary text-sm font-bold mb-4">
                    Bill From
                  </h3>
                  <FormInput
                    type="text"
                    name="senderStreet"
                    inputName="Street Address"
                    defaultValue={data?.senderAddress.street}
                  />

                  <div className="grid grid-cols-3 gap-4 mb-12">
                    <FormInput
                      type="text"
                      name="senderCity"
                      inputName="City"
                      defaultValue={data?.senderAddress?.city}
                    />
                    <FormInput
                      type="text"
                      name="senderPostCode"
                      inputName="Post Code"
                      defaultValue={data?.senderAddress?.postCode}
                    />
                    <FormInput
                      type="text"
                      name="senderCountry"
                      inputName="Country"
                      defaultValue={data?.senderAddress?.country}
                    />
                  </div>

                  <h3 className="text-primary text-sm font-bold mb-4">
                    Bill To
                  </h3>
                  <FormInput
                    name="clientName"
                    type="text"
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
                    name="street"
                    inputName="Street Address"
                    defaultValue={data?.clientAddress?.street}
                  />

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <FormInput
                      type="text"
                      name="city"
                      inputName="City"
                      defaultValue={data?.clientAddress?.city}
                    />
                    <FormInput
                      type="text"
                      name="postCode"
                      inputName="Post Code"
                      defaultValue={data?.clientAddress?.postCode}
                    />
                    <FormInput
                      type="text"
                      name="country"
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
                    <span className="text-center">Qty.</span>
                    <span className="text-left">Price</span>
                    <span className="text-center">Total</span>
                  </div>

                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between "
                    >
                      <div className="flex items-center gap-4 mb-5  rounded-md w-full ">
                        <input
                          type="text"
                          name="itemName"
                          defaultValue={item.name}
                          className=" max-w-[175px]   p-3 rounded-md  font-bold border border-[#52566c] bg-inherit cursor-pointer buttons"
                          onChange={(e) => {
                            updateItem(item.id, "name", e.target.value);
                          }}
                        />

                        <input
                          type="number"
                          name="quantity"
                          defaultValue={item.quantity}
                          className=" max-w-[70px] text-center p-3 rounded-sm buttons  font-bold border border-[#52566c] bg-inherit cursor-pointer"
                          onChange={(e) => {
                            updateItem(
                              item.id,
                              "quantity",
                              Number(e.target.value)
                            );
                          }}
                        />

                        <input
                          type="number"
                          name="price"
                          placeholder="0"
                          defaultValue={item.price}
                          className=" max-w-[125px] text-center p-3 rounded-sm  buttons  font-bold border border-[#52566c] bg-inherit cursor-pointer"
                          onChange={(e) => {
                            updateItem(
                              item.id,
                              "price",
                              Number(e.target.value)
                            );
                          }}
                        />
                        <span className="text-light2  max-w-[200px] font-bold text-base  text-right">
                          £ {item.quantity * item.price}
                        </span>
                      </div>

                      <button className="text-gray-400  mb-5 text-lg hover:text-red-500 transition">
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
            </ul>
            <div className="sticky bottom-0 rounded-br-2xl left-0  p-8 buttons-bottom      ">
              <div className="flex rounded-t-2xl justify-end gap-3 items-center font-bold text-sm">
                <label
                  className="bg-light1 title  text-light2 px-6 py-4 rounded-3xl cursor-pointer "
                  htmlFor="my-drawer"
                  type="button"
                >
                  Cancel
                </label>
                <button
                  className="bg-primary cursor-pointer text-bgLight px-6 py-4 rounded-3xl"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditInvoice;
