import { useState } from "react";

const PaymentForm = ({ product }) => {
  const [selectedTerm, setSelectedTerm] = useState(
    product?.paymentTerms || "Net 30 Days"
  );

  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      <div className="w-full">
        <label className="label">Project Date</label>
        <input
        placeholder="2021-08-21"
          type="text"   
          name="createdAt"
          inputName="createdAt"
          className="select-field buttonsdate text-light3"
        />
      </div>

      <div className="w-full">
        <label className="label">Payment Terms</label>
        <select
          className="w-full p-[14px] rounded-sm font-bold border border-[#52566c] bg-inherit cursor-pointer buttons"
          value={selectedTerm}
          onChange={(e) => setSelectedTerm(e.target.value)}
        >
          <option value="Net 1 Day">Net 1 Day</option>
          <option value="Net 7 Days">Net 7 Days</option>
          <option value="Net 14 Days">Net 14 Days</option>
          <option value="Net 30 Days">Net 30 Days</option>
        </select>
      </div>
    </div>
  );
};

export default PaymentForm;
