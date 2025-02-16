import { FaCirclePlus, FaTrash } from "react-icons/fa6";
import PaymentForm from "./PaymentForm";
import FormInput from "./FormInput";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { objectCreater } from "../utils/object-creater";
import { getOneData } from "../hooks/useFetch";
import { validate } from "../utils/validate";
import { toast } from "react-toastify";

function CreateInvoice() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const drawerRef = useRef(null);
  const formRef = useRef(null);
  const [items, setItems] = useState([
    { name: "", quantity: 1, price: 0, total: 0 },
  ]);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    getOneData(id)
      .then((res) => {
        if (res) {
          setData(res);
        } else {
          setError("Ma'lumot topilmadi!");
        }
      })
      .catch((err) => {
        console.error("API xatoligi!", err);
        setError("API xatoligi!");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p> Loading....</p>;
  if (error) return <p>{error}</p>;

  const handleReload = () => {
    window.location.reload();
  };

  async function getFormData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const items = formData.getAll("itemName").map((name, index) => ({
      name,
      quantity: Number(formData.getAll("quantity")[index]),
      price: Number(formData.getAll("price")[index]),
      total:
        Number(formData.getAll("quantity")[index]) *
        Number(formData.getAll("price")[index]),
    }));

    const status = e.nativeEvent.submitter.dataset.status;

    const invoiceData = objectCreater({
      createdAt: new Date().toISOString().split("T")[0],
      paymentDue: data.invoiceDate,
      description: data.projectDescription,
      paymentTerms: data.paymentTerms,
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      status,
      senderStreet: data.senderStreet,
      senderCity: data.senderCity,
      senderPostCode: data.senderPostCode,
      senderCountry: data.senderCountry,
      street: data.streetAddress,
      city: data.city,
      postCode: data.postCode,
      country: data.country,
      items,
    });

    //Validate
    const validateerrors = validate(invoiceData);
    if (!validateerrors) {
    } else {
      const { message, target } = validateerrors;
      toast.error(message);
      e.target[target]?.focus();
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(invoiceData),
      });

      if (!response.ok)
        throw new Error("Serverga ma'lumot yuborishda xatolik!");

      console.log("Yangi Invoice qo‘shildi:", await response.json());

      handleDiscard();
      handleReload();
    } catch (error) {
      console.error("Xatolik:", error);
    }
  }

  const handleDiscard = () => {
    if (drawerRef.current) {
      setTimeout(() => {
        drawerRef.current.checked = false;
      }, 0);
    }
    if (formRef.current) formRef.current.reset();
    setItems([{ name: "", quantity: 1, price: 0, total: 0 }]);
  };

  const addNewItem = () => {
    setItems([...items, { id: Date.now(), name: "", quantity: 1, price: 0 }]);
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
                field === "quantity" || field === "price"
                  ? field === "quantity"
                    ? value * item.price
                    : item.quantity * value
                  : item.total,
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
            className="bg-primary text-white font-semibold cursor-pointer drawer-button text-[14px] flex items-center px-4 py-3 rounded-full gap-3 shadow-md"
          >
            <FaCirclePlus className="text-3xl" />
            <p> New Invoice</p>
          </label>
        </div>
        <form
          ref={formRef}
          onSubmit={getFormData}
          className="  drawer-side   h-full lg:ml-24"
        >
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div>
            <ul className=" max-w-[670px] mt-[103px] amount list-a text-base-content h-full lg:mt-0  ">
              <div className="p-14">
                <h1 className="text-2xl font-bold mb-10">New Invoice</h1>

                <h3 className="text-primary text-sm font-bold mb-4">
                  Bill From
                </h3>
                <FormInput
                  type="text"
                  name="senderStreet"
                  inputName="Street Address"
                  placeholder="19 Union Terrace"
                />

                <div className="grid grid-cols-3 gap-4 mb-12">
                  <FormInput
                    type="text"
                    name="senderCity"
                    inputName="City"
                    placeholder="London"
                  />
                  <FormInput
                    type="text"
                    name="senderPostCode"
                    inputName="Post Code"
                    placeholder="E1 3EZ"
                  />
                  <FormInput
                    type="text"
                    name="senderCountry"
                    inputName="Country"
                    placeholder="United Kingdom"
                  />
                </div>

                <h3 className="text-primary text-sm font-bold mb-4">Bill To</h3>
                <FormInput
                  name="clientName"
                  type="text"
                  inputName="Client's Name"
                  placeholder="Alex Grim"
                />
                <FormInput
                  type="email"
                  name="clientEmail"
                  inputName="Client's Email"
                  placeholder="alexgrim@mail.com"
                />
                <FormInput
                  name="streetAddress"
                  type="text"
                  inputName="Street Address"
                  placeholder="84 Church Way"
                />

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <FormInput
                    name="city"
                    type="text"
                    inputName="City"
                    placeholder="Bradford"
                  />
                  <FormInput
                    type="text"
                    name="postCode"
                    inputName="Post Code"
                    placeholder="BD1 9PB"
                  />
                  <FormInput
                    type="text"
                    name="country"
                    inputName="Country"
                    placeholder="United Kingdom"
                  />
                </div>

                <PaymentForm data={data} />

                <FormInput
                  type="text"
                  name="projectDescription"
                  inputName="Project Description"
                  placeholder="project description"
                />

                <h3 className="text-light2 text-lg font-bold mb-4 mt-8">
                  Item List
                </h3>

                <div className="grid grid-flow-col grid-cols-4 text-light2 font-semibold mb-2 text-sm">
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
                          updateItem(item.id, "price", Number(e.target.value));
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
            </ul>

            <div className="sticky bottom-0 left-0 p-8 buttons-bottom rounded-lg w-full">
              <div className="flex justify-between items-center font-bold text-sm">
                <label
                  htmlFor="edit-drawer"
                  className="bg-bgLight text-light2 px-6 py-3 cursor-pointer rounded-3xl"
                  onClick={handleDiscard}
                >
                  Discard
                </label>
                <div>
                  <button
                    className="bg-light2 text-light1 cursor-pointer px-6 py-3 rounded-3xl mr-2"
                    data-status="draft"
                    type="submit"
                  >
                    Save as Draft
                  </button>
                  <button
                    className="bg-primary text-bgLight cursor-pointer px-6 py-3 rounded-3xl"
                    data-status="pending"
                    type="submit"
                  >
                    Save & Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateInvoice;
