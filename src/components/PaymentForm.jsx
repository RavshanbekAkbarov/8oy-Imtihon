import { useState } from "react";

const PaymentForm = ({ data }) => {
  const [selectedTerm, setSelectedTerm] = useState(
    data?.paymentTerms || "Net 30 Days"
  );

  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      <div className="w-full">
        <label className="label" htmlFor="Invoice Date">
          Project Date
        </label>
        <input
          type="date"
          name="invoiceDate"
          defaultValue={data?.createdAt}
          id="Invoice Date"
          className="  w-full p-3 rounded-md  font-bold border border-[#52566c] bg-inherit cursor-pointer buttonsdate text-light3"
        />
      </div>

      <div className="w-full">
        <label className="label" htmlFor="paymentTerms">
          Payment Terms
        </label>
        <select
          id="paymentTerms"
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
