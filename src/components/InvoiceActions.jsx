import { useEffect, useState } from "react";
import { getOneData } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import DeleteModal from "./AlertModal";

const InvoiceActions = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOneData(id)
      .then((res) => setData(res))
      .catch(() => {
        console.error("Ma'lumot olishda xatolik:", error);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p> Loading....</p>;
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
  return (
    <div className="flex justify-end gap-2 font-semibold text-bgLight">
      <label
        htmlFor="edit-drawer"
        className="bg-bgLight title text-light2 px-6 py-4 drawer-button rounded-[30px] cursor-pointer"
      >
        Edit
      </label>

      <button
        className="bg-danger1 px-6 py-4 rounded-[40px]"
        onClick={() => setIsModalOpen(true)}
      >
        Delete
      </button>
      <button
        className="bg-primary px-6 py-4 rounded-[40px]"
        onClick={() => {
          setIsModalOpen(false);
          handleDelete();
        }}
      >
        Mark as Paid
      </button>
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
