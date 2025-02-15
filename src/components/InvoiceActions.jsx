import { useEffect, useState } from "react";
import { getOneData } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import DeleteModal from "./AlertModal";
import EditInvoice from "./EditInvoice";

const InvoiceActions = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOneData(id)
      .then((res) => setData(res))
      .catch((error) => {
        console.error("Ma'lumot olishda xatolik:", error);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (!data) {
    return <p>Malumot Topilmadi</p>;
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/data/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Xatolik yuz berdi!");
      }

      window.location.href = "/";
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  const handleMarkAsPaid = async () => {
    try {
      const response = await fetch(`http://localhost:3000/data/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "paid" }),
      });

      if (!response.ok) {
        throw new Error("Xatolik yuz berdi!");
      }

      const updatedData = await response.json();
      setData(updatedData);
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  return (
    <div className=" justify-end  font-semibold text-bgLight">
      <div className="flex gap-2">
        <EditInvoice />
        <button
          className="bg-danger1 px-6 py-4 rounded-[40px]"
          onClick={() => setIsModalOpen(true)}
        >
          Delete
        </button>

        {data?.status === "paid" ? (
          ""
        ) : (
          <button
            className="bg-primary px-6 py-4 rounded-[40px]"
            onClick={handleMarkAsPaid}
          >
            Mark as Paid
          </button>
        )}
      </div>

      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onClick={() => {
          setIsModalOpen(false);
          handleDelete();
        }}
        invoiceId={data?.id}
      />
    </div>
  );
};

export default InvoiceActions;
