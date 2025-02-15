import { FaTrash } from "react-icons/fa6";
import PaymentForm from "./PaymentForm";
import FormInput from "./FormInput";
import { Form, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { objectCreater } from "../utils/object-creater";
import { getOneData } from "../hooks/useFetch";

function CreateInvoice() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const drawerRef = useRef(null);
  const formRef = useRef(null);
  const [items, setItems] = useState([
    { name: "", qty: 1, price: 0, total: 0 },
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

  const handleDiscard = () => {
    if (drawerRef.current) {
      setTimeout(() => {
        drawerRef.current.checked = false;
      }, 0);
    }
    if (formRef.current) formRef.current.reset();
    setItems([{ name: "", qty: 1, price: 0, total: 0 }]);
  };

  const addNewItem = () => {
    setItems([...items, { name: "", qty: 1, price: 0, total: 0 }]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = Number(value);
    newItems[index].total = newItems[index].qty * newItems[index].price;
    setItems(newItems);
  };

  const handleReload = () => {
    window.location.reload();
  };

  async function getFormData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const items = formData.getAll("itemName").map((name, index) => ({
      name,
      quantity: Number(formData.getAll("qty")[index]),
      price: Number(formData.getAll("price")[index]),
      total:
        Number(formData.getAll("qty")[index]) *
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

  return (
    <div className="drawer">
      <input
        id="edit-drawer"
        type="checkbox"
        className="drawer-toggle"
        ref={drawerRef}
      />
      <div className="drawer-side">
        <label htmlFor="edit-drawer" className="drawer-overlay"></label>

        <Form
          ref={formRef}
          onSubmit={getFormData}
          className="ml-24 md:w-[720px] h-full shadow-lg amount overflow-y-auto max-h-screen"
        >
          <div className="p-14">
            <h1 className="text-2xl font-bold mb-10">New Invoice</h1>

            <h3 className="text-primary text-sm font-bold mb-4">Bill From</h3>
            <FormInput
              type="text"
              name="streetAddress"
              inputName="Street Address"
              placeholder="19 Union Terrace"
            />

            <div className="grid grid-cols-3 gap-4 mb-12">
              <FormInput
                type="text"
                name="city"
                inputName="City"
                placeholder="London"
              />
              <FormInput
                type="text"
                name="postCode"
                inputName="Post Code"
                placeholder="E1 3EZ"
              />
              <FormInput
                type="text"
                name="country"
                inputName="Country"
                placeholder="United Kingdom"
              />
            </div>

            <h3 className="text-primary text-sm font-bold mb-4">Bill To</h3>
            <FormInput
              type="text"
              name="clientName"
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
              type="text"
              name="clientStreetAddress"
              inputName="Street Address"
              placeholder="84 Church Way"
            />

            <div className="grid grid-cols-3 gap-4 mb-4">
              <FormInput
                type="text"
                name="clientCity"
                inputName="City"
                placeholder="Bradford"
              />
              <FormInput
                type="text"
                name="clientPostCode"
                inputName="Post Code"
                placeholder="BD1 9PB"
              />
              <FormInput
                type="text"
                name="clientCountry"
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

            <div className="grid grid-flow-col text-light2 font-semibold mb-2 text-sm">
              <span className="text-left">Item Name</span>
              <span className="text-end">Qty.</span>
              <span className="text-center">Price</span>
              <span className="text-center">Total</span>
            </div>

            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 mb-5 rounded-md w-full"
              >
                <input
                  type="text"
                  name="itemName"
                  placeholder="Item Name"
                  value={item.name}
                  onChange={(e) =>
                    handleItemChange(index, "name", e.target.value)
                  }
                  className="select-field buttons"
                />

                <input
                  type="number"
                  name="qty"
                  placeholder="1"
                  value={item.qty}
                  min="1"
                  onChange={(e) =>
                    handleItemChange(index, "qty", e.target.value)
                  }
                  className="w-[70px] text-center p-3 rounded-sm buttons font-bold border border-[#52566c] bg-inherit cursor-pointer"
                />
                <input
                  type="number"
                  name="price"
                  value={item.price}
                  min="1"
                  onChange={(e) =>
                    handleItemChange(index, "price", e.target.value)
                  }
                  className="w-[125px] text-center p-3 rounded-sm buttons font-bold border border-[#52566c] bg-inherit cursor-pointer"
                />
                <span className="text-light2 w-[120px] font-bold text-base text-right">
                  £{item.total}
                </span>
                <button
                  className="text-gray-400 text-lg hover:text-red-500 transition"
                  onClick={() => removeItem(index)}
                  type="button"
                >
                  <FaTrash />
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
        </Form>
      </div>
    </div>
  );
}

export default CreateInvoice;
