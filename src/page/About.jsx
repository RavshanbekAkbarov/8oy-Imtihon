import { GoChevronLeft } from "react-icons/go";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import EditDrawer from "../components/EditDrawer";
import InvoiceActions from "../components/InvoiceActions";
import StatusBadge from "../components/StatusBadge";
import InvoiceItems from "../components/InvoiceItems";
import useProduct from "../hooks/useProduct";

function About() {
  const navigate = useNavigate();
  const { loading, product } = useProduct();
  const [isOpen, setIsOpen] = useState(false);
  if (loading) return <p>Loading....</p>;
  if (!product) return <p>topilmadi</p>;
  return (
    <div>
      <div className="w-[770px]   align-elements ">
        <span
          className="flex items-center  cursor-pointer gap-5 font-bold mb-8 "
          onClick={() => navigate("/")}
        >
          <GoChevronLeft className="text-primary text-lg  " />
          Go back
        </span>
        <div className="    rounded-lg   w-full ">
          <div className="flex  justify-between items-center list-a mb-6 rounded-lg  px-8 py-5 ">
            <div className="flex  items-center   gap-4">
              <h3 className="text-[14px] text-light3 font-normal">Status</h3>
              <StatusBadge status={product.status} />
            </div>
            <div>
              <InvoiceActions setIsOpen={setIsOpen} />
            </div>
          </div>
          <div className="p-8 rounded-lg list-a overflow-y-auto h-[460px]">
            <div className="flex justify-between ">
              <div>
                <h2 className="text-lg font-bold mb-2">
                  <span className="text-light3">#</span>
                  {product.id}
                </h2>
                <p className=" text-sm text-light3 mb-12">Graphic Design</p>
              </div>
              <div className="text-end text-sm  font-normal text-light3 ">
                <p>{product.senderAddress.street}</p>
                <p>{product.senderAddress.city}</p>
                <p>{product.senderAddress.postCode}</p>
                <p>{product.senderAddress.country}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 mb-12">
              <div>
                <div className="mb-8">
                  <p className="text-sm mb-2  text-light3">Invoice Date</p>
                  <p className=" text-lg font-bold">{product.createdAt}</p>
                </div>
                <div>
                  <p className="text-sm mb-2    text-light3">Payment Due</p>
                  <p className=" text-lg font-bold">{product.paymentDue}</p>
                </div>
              </div>

              <div className="">
                <p className="text-sm mb-3 text-light3">Bill To</p>
                <p className="text-lg font-bold mb-2">{product.clientName}</p>
                <p className="text-light3 font-normal text-sm">
                  {product.clientAddress.street}
                </p>
                <p className="text-light3 font-normal text-sm">
                  {product.clientAddress.city}
                </p>
                <p className="text-light3 font-normal text-sm">
                  {product.clientAddress.postCode}
                </p>
                <p className="text-light3  font-normal text-sm ">
                  {product.clientAddress.country}
                </p>
              </div>
              <div>
                <p className="text-sm mb-3 text-light3">Sent to</p>
                <p className="text-lg font-bold">{product.clientEmail}</p>
              </div>
            </div>
            <InvoiceItems items={product.items} />
            <div className=" amount-about flex justify-between  items-center  p-6 rounded-b-lg ">
              <p className="  font-normal   text-bgLight">Amount Due</p>
              <p className=" font-bold text-3xl   text-bgLight">
                £{product.total}
              </p>
            </div>
          </div>
        </div>
        <EditDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default About;
