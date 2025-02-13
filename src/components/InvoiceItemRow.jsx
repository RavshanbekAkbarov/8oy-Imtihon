const InvoiceItemRow = ({ product }) => {
  return (
    <div className="flex items-center gap-4 mb-5 rounded-md w-full">
      <input
        type="text"
        defaultValue={product.name}
        className="select-field buttons w-full"
      />
      <input
        type="text"
        defaultValue={product.quantity}
        className="w-[55px] text-center p-3 rounded-sm buttons font-bold border border-[#52566c] bg-inherit cursor-pointer"
      />
      <input
        type="text"
        defaultValue={product.price}
        className="w-[100px] text-center p-3 rounded-sm buttons font-bold border border-[#52566c] bg-inherit cursor-pointer"
      />
      <span className="text-light2 font-bold text-base text-right">
        £{(product.quantity * product.price).toFixed(2)}
      </span>
      <button
        onClick={() => onDelete(product.id)}
        className="text-gray-400 text-lg hover:text-red-500 transition"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default InvoiceItemRow;
